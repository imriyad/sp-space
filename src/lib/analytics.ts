export type AnalyticsEvent =
  | "click_call"
  | "click_whatsapp"
  | "form_submit";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>,
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
