export default function FactoryHero() {
  return (
    <section
      className="relative h-[320px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/factory-banner.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        {/* Breadcrumb */}
        <p className="text-sm text-white/80">
          Home &gt; Our Service &gt; Factory &amp; Machinery
        </p>

        {/* Heading */}
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
          Our Manufacturing Excellence
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 md:text-base">
          State-of-the-art facilities meeting the highest global ethical and
          quality standards through innovation and precision.
        </p>
      </div>
    </section>
  );
}