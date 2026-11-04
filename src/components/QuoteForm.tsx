"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { services } from "@/content/services";
import type { Locale } from "@/i18n/routing";
import { trackEvent } from "@/lib/analytics";

type QuoteFormProps = {
  locale: Locale;
};

export function QuoteForm({ locale }: QuoteFormProps) {
  const t = useTranslations("common");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          service: data.get("service"),
          location: data.get("location"),
          budget: data.get("budget"),
          message: data.get("message"),
          company: data.get("company"), // honeypot
          locale,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      trackEvent("form_submit", { form: "quote" });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="card-surface bg-bg-alt p-8 text-lg text-primary" role="status">
        {t("formSuccess")}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Honeypot — leave empty */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("name")} name="name" required />
        <Field label={t("phone")} name="phone" type="tel" required />
      </div>
      <Field label={t("emailField")} name="email" type="email" required />
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium">
          {t("selectService")}
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-2xl border border-white/10 bg-bg-dark-elevated px-4 py-3 text-white"
          defaultValue=""
        >
          <option value="">—</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title[locale]}
            </option>
          ))}
        </select>
      </div>
      <Field label={t("yourLocation")} name="location" />
      <Field label={t("budgetRange")} name="budget" />
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          {t("message")} <span className="text-secondary">({t("required")})</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-bg-dark-elevated px-4 py-3 text-white"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {t("formError")}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-pill btn-pill-primary"
        disabled={status === "loading"}
      >
        {status === "loading" ? t("sending") : t("sendMessage")}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
        {required ? <span className="text-secondary"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-bg-dark-elevated px-4 py-3 text-white"
      />
    </div>
  );
}
