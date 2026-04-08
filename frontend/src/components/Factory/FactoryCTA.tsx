export default function FactoryCTA() {
  return (
    <section className="bg-white px-6 py-24 text-center">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm text-gray-500">Own Factory</p>

        <h2 className="mt-4 text-5xl font-semibold">
          The Ways to Keep Business Growing
        </h2>

        <p className="mt-6 text-gray-600 leading-7">
          Are you interested to know details about our factory, production
          system and company policy at a glance? Please have a look at the
          provided PDF file.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg bg-red-500 px-6 py-3 text-white">
            Download PDF
          </button>

          <button className="rounded-lg bg-blue-500 px-6 py-3 text-white">
            View PDF
          </button>
        </div>
      </div>
    </section>
  );
}