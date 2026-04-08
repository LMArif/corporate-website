export default function BuyingHouseProcess() {
  const steps = [
    {
      title: "Consultation",
      desc: "We listen to your needs and understand your specifications",
      color: "text-orange-500",
    },
    {
      title: "Supplier match",
      desc: "We match you with manufacturers who meet your standards",
      color: "text-orange-500",
    },
    {
      title: "Order management",
      desc: "We negotiate terms and oversee production from start to finish",
      color: "text-gray-400",
    },
    {
      title: "Quality check",
      desc: "Every batch is tested against your specifications and standards",
      color: "text-gray-400",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-gray-500">Process</p>

          <h2 className="mt-4 text-6xl font-semibold leading-tight text-black">
            How we work
          </h2>

          <button className="mt-12 rounded-xl border border-gray-300 px-8 py-4 text-2xl font-medium transition hover:bg-gray-50">
            Discuss
          </button>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className={`text-3xl ${step.color}`}>◉</div>
                {index !== steps.length - 1 && (
                  <div className="mt-2 h-24 w-px bg-gray-200" />
                )}
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xl text-xl leading-9 text-gray-700">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}