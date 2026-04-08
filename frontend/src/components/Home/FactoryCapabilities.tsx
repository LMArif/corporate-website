import Image from "next/image";

export default function FactoryCapabilities() {
  const items = [
    {
      title: "Garment production support",
      desc: "Full-scale manufacturing with quality control at each stage.",
    },
    {
      title: "Maintenance and technical support",
      desc: "Our team keeps machines running smoothly year-round.",
    },
    {
      title: "Machinery supply and installation",
      desc: "We source and install equipment tailored to your needs.",
    },
    {
      title: "Production optimization",
      desc: "We improve efficiency and reduce waste on every line.",
    },
  ];

  return (
    <section className="bg-[#fceada] px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-sm text-gray-600">Factory</p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight text-black">
            Factory and machinery capabilities
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            We work with modern facilities equipped for precision production.
            Our network includes mills and factories with the latest
            technology.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {items.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium transition hover:bg-gray-50">
            Details
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/factory-capabilities.jpg"
            alt="Factory capabilities"
            width={700}
            height={550}
            className="h-[480px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}