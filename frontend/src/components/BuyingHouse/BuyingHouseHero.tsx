export default function BuyingHouseHero() {
  return (
    <section
      className="relative h-[420px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/buying-house-hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="text-sm text-white/85">
          Home &gt; Our Service &gt; <span className="font-semibold">Buying House Services</span>
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
          Professional Buying &amp;
          <br />
          Sourcing Services
        </h1>

        <p className="mt-6 max-w-5xl text-base leading-8 text-white/90 md:text-lg">
          State-of-the-art facilities meeting the highest global ethical and
          quality standards through innovation and precision.
        </p>
      </div>
    </section>
  );
}