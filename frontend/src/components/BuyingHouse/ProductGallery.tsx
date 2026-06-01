"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductItem = {
  name: string;
  image: string;
};

type ProductSection = {
  subtitle: string;
  items: ProductItem[];
};

type ProductGroup = {
  _id?: string;
  title: string;
  sections: ProductSection[];
};

export default function ProductGallery() {
  const [productGroups, setProductGroups] = useState<ProductGroup[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const fetchProductGallery = async () => {
    try {
      const res = await fetch(`${API_URL}/api/product-gallery`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setProductGroups(data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch product gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductGallery();
  }, []);

  if (loading) {
    return (
      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-7xl py-20 text-center">
          <p className="text-lg text-gray-600">Loading product gallery...</p>
        </div>
      </section>
    );
  }

  if (!productGroups.length) {
    return (
      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-7xl py-20 text-center">
          <p className="text-lg text-gray-600">No product gallery found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        {productGroups.map((group, groupIndex) => (
          <div key={group._id || groupIndex} className="mb-24">
            <h2 className="mb-12 border-b border-gray-200 pb-8 text-center text-5xl font-medium text-[#1B1E3F]">
              {group.title}
            </h2>

            {group.sections?.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16">
                <h3 className="mb-8 text-3xl font-medium text-[#1B1E3F]">
                  {section.subtitle}
                </h3>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                  {section.items?.map((item, itemIndex) => (
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