export default function ServicesSection() {
  const services = [
    {
      title: "Buying House Service",
      description:
        "We provide complete garments sourcing and buying house support for international clients.",
    },
    {
      title: "Factory Management",
      description:
        "Our team ensures smooth production, quality control, and timely shipment management.",
    },
    {
      title: "Product Development",
      description:
        "We help develop modern fashion products based on buyer requirements and market trends.",
    },
  ];

  return (
    <section className="py-20 px-10 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer end-to-end garments sourcing, production, and quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-800">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>
              <button className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}