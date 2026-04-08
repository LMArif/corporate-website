export default function StatsSection() {
  return (
    <section className="bg-indigo-950 text-white py-16 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold">10+</h2>
          <p className="mt-2 text-lg">Years Experience</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">150+</h2>
          <p className="mt-2 text-lg">Global Buyers</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">500+</h2>
          <p className="mt-2 text-lg">Products Delivered</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">24/7</h2>
          <p className="mt-2 text-lg">Client Support</p>
        </div>
      </div>
    </section>
  );
}