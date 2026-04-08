import Image from "next/image";

export default function ServicesHighlight() {
  const points = [
    "Product development and sampling",
    "Supplier selection and evaluation",
    "Price negotiation and order placement",
  ];

  return (
    <section className="bg-[#fceada] px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/services-highlight.jpg"
            alt="Services highlight"
            width={700}
            height={550}
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm text-gray-600">Services</p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight text-black">
            Professional buying house services
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            We handle the complexity of sourcing so you can focus on your
            business. Our buying house team brings years of experience in
            connecting buyers with the right manufacturers.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-1 text-lg text-black">•</span>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium transition hover:bg-gray-50">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}