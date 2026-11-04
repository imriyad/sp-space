import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";
import { site } from "@/content/site";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(160),
  service: z.string().trim().max(120).optional().nullable(),
  location: z.string().trim().max(160).optional().nullable(),
  budget: z.string().trim().max(120).optional().nullable(),
  message: z.string().trim().min(5).max(5000),
  company: z.string().optional().nullable(), // honeypot
  locale: z.enum(["en", "bn"]).optional(),
});

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(`contact:${ip}`, 5, 60_000);
  if (!limited.ok) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot triggered — pretend success
  if (data.company && data.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `[SB Space] Quote request from ${data.name}`;
  const text = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Service: ${data.service || "—"}`,
    `Location: ${data.location || "—"}`,
    `Budget: ${data.budget || "—"}`,
    `Locale: ${data.locale || "—"}`,
    "",
    data.message,
  ].join("\n");

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY missing — logged only:\n", text);
    return NextResponse.json({ ok: true, mode: "log" });
  }

  try {
    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM_EMAIL || "SB Space Website <onboarding@resend.dev>";
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      text,
    });

    if (result.error) {
      console.error("[contact] Resend error", result.error);
      return NextResponse.json({ error: "Email failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] send failed", error);
    return NextResponse.json({ error: "Email failed" }, { status: 502 });
  }
}
