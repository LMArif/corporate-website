import Image from "next/image";

const productGroups = [
  {
    title: "Woven",
    sections: [
      {
        subtitle: "Five Pocket Twill",
        items: [
          { name: "Men’s Five Pocket TRS", image: "/images/Premium Cotton T-Shirt.jpg" },
          { name: "Men’s Five Pocket TRS", image: "/images/Premium Cotton T-Shirt.jpg" },
          { name: "Men’s Five Pocket TRS", image: "/images/Premium Cotton T-Shirt.jpg" },
          { name: "Men’s Five Pocket TRS", image: "/images/Premium Cotton T-Shirt.jpg" },
        ],
      },
      {
        subtitle: "Ladies Dress & Jackets",
        items: [
          { name: "Ladies Dresses", image: "/images/Premium Cotton T-Shirt-ladies.jpg" },
          { name: "Ladies Dresses", image: "/images/Premium Cotton T-Shirt-ladies.jpg" },
          { name: "Ladies Jacket", image: "/images/Premium Cotton T-Shirt-ladies.jpg" },
          { name: "Ladies Jacket", image: "/images/Premium Cotton T-Shirt-ladies.jpg" },
        ],
      },
      {
        subtitle: "Girls Denim",
        items: [
          { name: "Girls Wide Leg Jegging", image: "/images/Performance Polo-girls.jpg" },
          { name: "Girls Wide Leg And Paper Bag", image: "/images/Performance Polo-girls.jpg" },
          { name: "Premium Heavyweight Hoodie", image: "/images/Performance Polo-girls.jpg" },
          { name: "Streetwear Oversized Hoodie", image: "/images/Performance Polo-girls.jpg" },
        ],
      },
      {
        subtitle: "Jeggings",
        items: [
          { name: "Stretch Fit Denim Jeggings", image: "/images/Performance Polo-jeg.jpg" },
          { name: "High-Waist Slim Jeggings", image: "/images/Performance Polo-jeg.jpg" },
          { name: "Comfort Flex Jeggings", image: "/images/Performance Polo-jeg.jpg" },
          { name: "Streetwear Oversized Hoodie", image: "/images/Performance Polo-jeg.jpg" },
        ],
      },
    ],
  },
  {
    title: "Knitwear",
    sections: [
      {
        subtitle: "T-Shirt",
        items: [
          { name: "Classic Cotton Crew T-Shirt", image: "/images/Long Sleeve Henley-tshirt.jpg" },
          { name: "Premium Soft Touch V-Neck T-Shirt", image: "/images/Long Sleeve Henley-tshirt.jpg" },
          { name: "Pique Polo Shirt", image: "/images/Long Sleeve Henley-tshirt.jpg" },
          { name: "Urban Style Graphic T-Shirt", image: "/images/Long Sleeve Henley-tshirt.jpg" },
        ],
      },
      {
        subtitle: "Polo",
        items: [
          { name: "Classic Piqué Polo Shirt", image: "/images/Performance Polo-polo.jpg" },
          { name: "Premium Soft Touch V-Neck T-Shirt", image: "/images/Performance Polo-polo.jpg" },
          { name: "Sport Dry Polo Shirt", image: "/images/Performance Polo-polo.jpg" },
          { name: "Urban Style Graphic T-Shirt", image: "/images/Performance Polo-polo.jpg" },
        ],
      },
      {
        subtitle: "Hoodie",
        items: [
          { name: "Classic Pullover Hoodie", image: "/images/Premium Cotton T-Shirt-hoodie.jpg" },
          { name: "Zipper Front Fleece Hoodie", image: "/images/Premium Cotton T-Shirt-hoodie.jpg" },
          { name: "Premium Heavyweight Hoodie", image: "/images/Premium Cotton T-Shirt-hoodie.jpg" },
          { name: "Streetwear Oversized Hoodie", image: "/images/Premium Cotton T-Shirt-hoodie.jpg" },
        ],
      },
      {
        subtitle: "Jeggings",
        items: [
          { name: "Stretch Fit Denim Jeggings", image: "/images/Premium Cotton T-Shirt-kjeg.jpg" },
          { name: "High-Waist Slim Jeggings", image: "/images/Premium Cotton T-Shirt-kjeg.jpg" },
          { name: "Comfort Flex Jeggings", image: "/images/Premium Cotton T-Shirt-kjeg.jpg" },
          { name: "Streetwear Oversized Hoodie", image: "/images/Premium Cotton T-Shirt-kjeg.jpg" },
        ],
      },
    ],
  },
];

export default function ProductGallery() {
  return (
    <section className="bg-white px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        {productGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-24">
            <h2 className="mb-12 border-b border-gray-200 pb-8 text-center text-5xl font-medium text-[#1B1E3F]">
              {group.title}
            </h2>

            {group.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16">
                <h3 className="mb-8 text-3xl font-medium text-[#1B1E3F]">
                  {section.subtitle}
                </h3>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F8FB]"
                    >
                      <div className="flex h-[340px] items-center justify-center bg-[#F4F4F4] p-6">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={260}
                          height={300}
                          className="max-h-[300px] w-auto object-contain"
                        />
                      </div>

                      <div className="bg-[#EEF1F5] px-4 py-4 text-center">
                        <p className="text-xl font-medium text-[#1B1E3F]">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}