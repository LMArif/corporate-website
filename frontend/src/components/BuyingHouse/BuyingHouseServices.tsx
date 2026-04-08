export default function BuyingHouseServices() {
  const services = [
    {
      title: "Product development and sampling",
      desc: "We create samples that match your vision exactly.",
      active: true,
    },
    {
      title: "Supplier selection and evaluation",
      desc: "We find manufacturers who meet your standards.",
      active: false,
    },
    {
      title: "Price negotiation and order placement",
      desc: "We secure the best terms for your orders.",
      active: false,
    },
    {
      title: "Production follow-up and quality inspection",
      desc: "We monitor every batch from loom to shipment.",
      active: false,
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-medium text-gray-500">Services</p>

        <h2 className="mt-4 text-5xl font-semibold text-black md:text-6xl">
          Buying house services
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          We manage every step of your sourcing journey with precision.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 text-left ${
                item.active
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-200 bg-white text-black"
              }`}
            >
              <div className="text-3xl">▣</div>

              <h3 className="mt-10 text-2xl font-semibold leading-tight">
                {item.title}
              </h3>

              <p
                className={`mt-6 text-lg leading-8 ${
                  item.active ? "text-white/90" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}