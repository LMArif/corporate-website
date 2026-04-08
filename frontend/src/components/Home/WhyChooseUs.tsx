export default function WhyChooseUs() {
  const features = [
    {
      title: "Quality assurance",
      desc: "Rigorous testing at every production stage",
      icon: "▣",
      color: "text-orange-500",
    },
    {
      title: "Ethical sourcing",
      desc: "Fair wages and safe working conditions",
      icon: "≋",
      color: "text-blue-500",
    },
    {
      title: "On-time delivery",
      desc: "Your deadlines are our commitments",
      icon: "▣",
      color: "text-green-500",
    },
    {
      title: "Global network",
      desc: "Connected across Bangladesh and beyond",
      icon: "◉",
      color: "text-indigo-500",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-gray-500">Why</p>

        <h2 className="mt-4 text-5xl font-semibold text-black">
          What sets us apart
        </h2>

        <p className="mt-4 text-gray-600">We stand behind every garment</p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-left"
            >
              <div className={`text-3xl ${item.color}`}>{item.icon}</div>

              <h3 className="mt-6 text-2xl font-semibold leading-tight text-black">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}