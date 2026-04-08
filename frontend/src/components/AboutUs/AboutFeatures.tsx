export default function AboutFeatures() {
  const features = [
    {
      title: "Quality assurance",
      desc: "Rigorous testing at every production stage",
    },
    {
      title: "Ethical sourcing",
      desc: "Fair wages and safe working conditions",
    },
    {
      title: "On-time delivery",
      desc: "Your deadlines are our commitments",
    },
    {
      title: "Global network",
      desc: "Connected across Bangladesh and beyond",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-gray-500">Why</p>

        <h2 className="mt-4 text-5xl font-semibold">
          What sets us apart
        </h2>

        <p className="mt-4 text-gray-600">
          We stand behind every garment
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-8 text-left"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}