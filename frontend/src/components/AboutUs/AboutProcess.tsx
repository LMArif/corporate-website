export default function AboutProcess() {
  const steps = [
    "Consultation",
    "Supplier match",
    "Order management",
    "Quality check",
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">Process</p>

          <h2 className="mt-4 text-5xl font-semibold">
            How we work
          </h2>

          <button className="mt-8 rounded-lg border px-6 py-3">
            Discuss
          </button>
        </div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-l-2 border-gray-200 pl-6"
            >
              <h3 className="text-2xl font-semibold">{step}</h3>
              <p className="mt-2 text-gray-600">
                We ensure a smooth and professional workflow from start to
                finish.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}