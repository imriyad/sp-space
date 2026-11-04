import { Link } from "@/i18n/navigation";

export default function LocaleNotFound() {
  return (
    <section className="section-pad bg-background">
      <div className="container-text text-center">
        <h1 className="headline-section">404</h1>
        <p className="body-lg mt-4">
          This page could not be found.
        </p>
        <Link href="/" className="btn-pill btn-pill-primary mt-8 inline-flex">
          Back to home
        </Link>
      </div>
    </section>
  );
}
