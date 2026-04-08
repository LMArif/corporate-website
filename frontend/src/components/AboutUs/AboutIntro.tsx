import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/about-company.jpg"
            alt="About company"
            width={700}
            height={600}
            className="h-[500px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Established Excellence
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight">
            Professional buying house services
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Founded with a vision to revolutionize the apparel industry,
            Alliance Sourcing BD has grown into a global leader in garment
            sourcing.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            With decades of collective expertise, we bridge the gap between
            world-class brands and high-quality manufacturing units in
            Bangladesh and beyond.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Our journey is defined by excellence, ethical practices, and a
            relentless commitment to transparency, efficiency, and
            sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}