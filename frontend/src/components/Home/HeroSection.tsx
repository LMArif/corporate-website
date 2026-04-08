import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[520px] bg-cover bg-center bg-no-repeat sm:min-h-[600px] md:min-h-[680px] lg:min-h-[770px]"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-4 text-center text-white sm:min-h-[600px] sm:px-6 md:min-h-[680px] lg:min-h-[770px]">
        <div className="mb-4 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs backdrop-blur-sm sm:mb-6 sm:px-6 sm:text-sm">
          House Of Fashion Stitching
        </div>

        <h1 className="max-w-xs text-3xl font-semibold leading-tight sm:max-w-2xl sm:text-4xl md:max-w-3xl md:text-5xl lg:max-w-4xl lg:text-7xl">
          Your trusted partner
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          in apparel sourcing
        </h1>

        <p className="mt-4 max-w-sm text-sm leading-6 text-white/90 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-7 md:max-w-3xl md:text-lg md:leading-8">
          We connect international buyers with reliable manufacturers across
          Bangladesh. From product development to final shipment, we handle
          every detail with precision and care.
        </p>

        <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600 sm:text-base"
          >
            Contact US
          </Link>

          <Link
            href="/about"
            className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-600 transition hover:bg-gray-100 sm:text-base"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}