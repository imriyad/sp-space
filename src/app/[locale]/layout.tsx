import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Manrope, Noto_Sans_Bengali } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";
import { organizationSchema, localBusinessSchemas } from "@/lib/schema";
import { site } from "@/content/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.sbspacebd.com",
    ),
    title: {
      default: site.name,
      template: `%s | ${site.shortName}`,
    },
    description: site.description,
    icons: {
      icon: [{ url: "/icons/icon.png", type: "image/png", sizes: "512x512" }],
      apple: [{ url: "/icons/icon.png", type: "image/png", sizes: "512x512" }],
    },
    other: {
      "theme-color": "#050505",
    },
    verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
      : undefined,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("nav");

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${notoBengali.variable} h-full antialiased`}
    >
      <body
        className={`flex min-h-full flex-col bg-background text-foreground ${locale === "bn" ? "locale-bn" : ""}`}
      >
        <NextIntlClientProvider messages={messages}>
          <a href="#main" className="skip-link">
            {t("skipToContent")}
          </a>
          <JsonLd data={[organizationSchema(), ...localBusinessSchemas()]} />
          <ScrollToTop />
          <Nav />
          <main id="main" className="flex-1 pb-24 md:pb-0">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
