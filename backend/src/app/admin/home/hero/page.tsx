"use client";

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

export default function HeroAdminPage() {
  const [hero, setHero] = useState<HeroType>({
    title: "",
    subtitle: "",
    description: "",
    buttonText: "",
    buttonLink: "",
    image: "",
  });

  const [heroId, setHeroId] = useState("");

  // 🔥 fetch data
  const fetchHero = async () => {
    const res = await fetch("http://localhost:3001/api/hero");
    const data = await res.json();

    if (data.success && data.data) {
      setHero(data.data);
      setHeroId(data.data._id);
    }
  };

  useEffect(() => {
    fetchHero();
  }, []);

  // 🔥 input change
  const handleChange = (e: any) => {
    setHero({ ...hero, [e.target.name]: e.target.value });
  };

  // 🔥 update
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:3001/api/hero/${heroId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hero),
      }
    );

    const data = await res.json();

    if (data.success) {
      alert("Hero updated successfully 🚀");
      fetchHero();
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Hero Section</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
        <input
          name="title"
          value={hero.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-3 rounded"
        />

        <input
          name="subtitle"
          value={hero.subtitle}
          onChange={handleChange}
          placeholder="Subtitle"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          value={hero.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-3 rounded"
        />

        <input
          name="buttonText"
          value={hero.buttonText}
          onChange={handleChange}
          placeholder="Button Text"
          className="w-full border p-3 rounded"
        />

        <input
          name="buttonLink"
          value={hero.buttonLink}
          onChange={handleChange}
          placeholder="Button Link"
          className="w-full border p-3 rounded"
        />

        <input
          name="image"
          value={hero.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-3 rounded"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Update Hero
        </button>
      </form>
    </div>
  );
}