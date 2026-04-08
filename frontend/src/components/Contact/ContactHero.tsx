export default function ContactHero() {
  return (
    <section
      className="relative h-[280px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/contact-banner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <p className="text-sm text-white/80">
          Home &gt; Our Service &gt; Contact
        </p>

        <h1 className="mt-4 text-5xl font-semibold">Contact us</h1>

        <p className="mt-4 max-w-3xl text-white/90">
          We are here to answer your questions and discuss your sourcing needs.
        </p>
      </div>
    </section>
  );
}