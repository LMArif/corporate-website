import Image from "next/image";

export default function ProductsServices() {
  const items = [
    {
      title: "Knitwear",
      desc: "Sweaters, t-shirts, and knit garments made to order.",
    },
    {
      title: "Denim and heavy fabrics",
      desc: "Durable denim and canvas for pants and jackets.",
    },
    {
      title: "Woven fabrics",
      desc: "Cotton, blends, and specialty woven materials in stock.",
    },
    {
      title: "Accessories and trims",
      desc: "Buttons, zippers, labels, and finishing materials available.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/products-services.jpg"
            alt="Products and services"
            width={700}
            height={550}
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500">Catalog</p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight text-black">
            Products and services
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We source and manage everything you need for apparel production.
            From raw materials to finished goods, we handle it all.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {items.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium transition hover:bg-gray-50">
            Browse
          </button>
        </div>
      </div>
    </section>
  );
}