export default function AboutHero() {
  return (
    <section
      className="relative h-[320px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/about-banner.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        {/* Breadcrumb */}
        <p className="text-sm text-white/80">
          Home &gt; About Us
        </p>

        {/* Heading */}
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
          About Alliance Sourcing BD
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 md:text-base">
          Your premier partner in seamless garment sourcing and global
          manufacturing excellence, bridging the gap between design and
          production.
        </p>
      </div>
    </section>
  );
}