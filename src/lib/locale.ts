import type { Locale } from "@/i18n/routing";

export function tLocal<T extends { en: string; bn: string }>(
  value: T,
  locale: Locale,
): string {
  return value[locale];
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "bn";
}
