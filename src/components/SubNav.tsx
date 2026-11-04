import { Link } from "@/i18n/navigation";

export function SubNav({ title, ctaLabel }: { title: string; ctaLabel: string }) {
  return (
    <div className="sticky top-16 z-30 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container-media flex h-12 items-center justify-between gap-4">
        <p className="truncate text-sm font-semibold text-white">{title}</p>
        <Link href="/contact" className="btn-pill btn-pill-primary !min-h-9 !px-4 !py-1.5 text-xs">
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
