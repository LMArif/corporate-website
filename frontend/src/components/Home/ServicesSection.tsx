"use client";

import { useEffect, useState } from "react";

type ServiceItem = {
  title: string;
  description: string;
};

type ServicesSectionType = {
  _id?: string;
  heading: string;
  subheading: string;
  services: ServiceItem[];
};

export default function ServicesSection() {
  const [data, setData] = useState<ServicesSectionType | null>(null);
  const [loading, setLoading] = useState(true);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const fetchServicesSection = async () => {
    try {
      const res = await fetch(`${API_URL}/api/services-section`, {
        cache: "no-store",
      });

      const result = await res.json();

      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch services section:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicesSection();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-100 px-10 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-lg text-gray-600">Loading services...</p>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="bg-gray-100 px-10 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-lg text-gray-600">No services section found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {data.heading}
          </h2>

          {data.subheading && (
            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
              {data.subheading}
            </p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.services?.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="text-base leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}