export default function Factory() {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-indigo-900">
          Factory & Machinery
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Our advanced factory setup and modern machinery ensure premium
          quality garments production with fast delivery and strict
          quality control.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 shadow-lg rounded-2xl">
            <h3 className="text-2xl font-semibold">Modern Machines</h3>
            <p className="mt-4 text-gray-600">
              Latest imported machinery for denim and garments production.
            </p>
          </div>

          <div className="p-8 shadow-lg rounded-2xl">
            <h3 className="text-2xl font-semibold">Quality Control</h3>
            <p className="mt-4 text-gray-600">
              Dedicated QC team ensures international standard production.
            </p>
          </div>

          <div className="p-8 shadow-lg rounded-2xl">
            <h3 className="text-2xl font-semibold">Fast Delivery</h3>
            <p className="mt-4 text-gray-600">
              Optimized production line for faster global shipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}