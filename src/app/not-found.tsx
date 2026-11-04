import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-[#1d1d1f]">
        <h1 className="text-5xl font-semibold tracking-tight">404</h1>
        <p className="mt-4 max-w-md text-[#6e6e73]">
          This page could not be found. Return home or contact SB Space for help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/en"
            className="inline-flex rounded-full bg-[#0071e3] px-5 py-3 text-white"
          >
            Home (EN)
          </Link>
          <Link
            href="/bn"
            className="inline-flex rounded-full border border-black/10 px-5 py-3"
          >
            হোম (বাং)
          </Link>
          <Link href="/en/contact" className="inline-flex px-5 py-3 text-[#0071e3]">
            Contact ›
          </Link>
        </div>
      </body>
    </html>
  );
}
