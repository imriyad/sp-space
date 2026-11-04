"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";

/** Pin new routes to the top; Next + css smooth scroll can leave mid-page. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;

    const pin = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    pin();
    const frame = window.requestAnimationFrame(pin);
    const timer = window.setTimeout(pin, 50);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
