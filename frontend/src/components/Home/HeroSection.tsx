"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type HeroType = {
  _id?: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
};

export default function HeroSection() {
  const [hero, setHero] = useState<HeroType | null>(null);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log("API_URL =", API_URL);

  const fetchHero = async () => {
    try {
      const res = await fetch(`${API_URL}/api/hero`, {
        cache: "no-store",
      });
      const data = await res.json();

      if (data.success) {
        setHero(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch hero:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHero();
  }, []);

  if (loading) {
    return (
      <section className="flex min-h-[500px] items-center justify-center bg-gray-100">
        <p className="text-lg">Loading hero...</p>
      </section>
    );
  }

  if (!hero) {
    return (
      <section className="flex min-h-[500px] items-center justify-center bg-gray-100">
        <p className="text-lg">No hero data found.</p>
      </section>
    );
  }

  return (
    <section
      className="relative min-h-[770px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${hero.image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex min-h-[770px] max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-6 rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm backdrop-blur-sm">
          {hero.subtitle}
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
          {hero.description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href={hero.buttonLink}
            className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
          >
            {hero.buttonText}
          </Link>

          <Link
            href="/about"
            className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}