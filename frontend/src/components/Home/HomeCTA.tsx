import Link from "next/link";

export default function HomeCTA() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-6 py-28"
      style={{
        backgroundImage: "url('/images/home-cta.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto max-w-5xl rounded-2xl border border-white/20 px-6 py-20 text-center text-white backdrop-blur-sm">
        <h2 className="text-5xl font-semibold leading-tight">
          Ready to start sourcing?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-white/90">
          Let us handle your next apparel order from start to finish.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
          >
            Contact
          </Link>

          <Link
            href="/about"
            className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-gray-100"
          >
            Learn
          </Link>
        </div>
      </div>
    </section>
  );
}