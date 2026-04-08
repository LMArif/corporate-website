export default function HomeProcess() {
  const steps = [
    {
      title: "Consultation",
      desc: "We listen to your needs and understand your specifications",
    },
    {
      title: "Supplier match",
      desc: "We match you with manufacturers who meet your standards",
    },
    {
      title: "Order management",
      desc: "We negotiate terms and oversee production from start to finish",
    },
    {
      title: "Quality check",
      desc: "Every batch is tested against your specifications and standards",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">Process</p>

          <h2 className="mt-4 text-5xl font-semibold text-black">
            How we work
          </h2>

          <button className="mt-8 rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-50">
            Discuss
          </button>
        </div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="mt-1 h-5 w-5 rounded-full border-2 border-orange-400" />
                {index !== steps.length - 1 && (
                  <div className="mt-2 h-20 w-px bg-gray-200" />
                )}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md text-gray-600 leading-7">
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