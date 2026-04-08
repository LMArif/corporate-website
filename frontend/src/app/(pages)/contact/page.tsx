import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactMap from "@/components/Contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-gray-500">Reach</p>

          <h2 className="mt-3 text-5xl font-semibold text-black">
            Contact us
          </h2>

          <p className="mt-4 text-gray-600">
            We are here to answer your questions and discuss your sourcing needs.
          </p>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </section>
    </main>
  );
}