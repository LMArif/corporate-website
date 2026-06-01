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

export default function ServicesSectionAdminPage() {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const emptyData: ServicesSectionType = {
    heading: "",
    subheading: "",
    services: [{ title: "", description: "" }],
  };

  const [formData, setFormData] = useState<ServicesSectionType>(emptyData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_URL}/api/services-section`, {
        cache: "no-store",
      });
      const data = await res.json();

      if (data.success && data.data) {
        setFormData(data.data);
        setEditingId(data.data._id);
      }
    } catch (error) {
      console.error("Fetch services section error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTopChange = (field: "heading" | "subheading", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addService = () => {
    setFormData((prev) => ({
      ...prev,
      services: [...prev.services, { title: "", description: "" }],
    }));
  };

  const removeService = (index: number) => {
    setFormData((prev) => {
      const updated = [...prev.services];
      updated.splice(index, 1);
      return { ...prev, services: updated };
    });
  };

  const handleServiceChange = (
    index: number,
    field: "title" | "description",
    value: string
  ) => {
    setFormData((prev) => {
      const updated = [...prev.services];
      updated[index][field] = value;
      return { ...prev, services: updated };
    });
  };

  const resetForm = () => {
    setFormData(emptyData);
    setEditingId(null);
  };

  const handleDelete = async () => {
    if (!editingId) return;

    const ok = confirm("Are you sure you want to delete this section?");
    if (!ok) return;

    try {
      const res = await fetch(`${API_URL}/api/services-section/${editingId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        alert("Deleted successfully");
        resetForm();
      } else {
        alert(data.message || "Delete failed");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSaving(true);

      const url = editingId
        ? `${API_URL}/api/services-section/${editingId}`
        : `${API_URL}/api/services-section`;

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          heading: formData.heading,
          subheading: formData.subheading,
          services: formData.services,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert(editingId ? "Updated successfully" : "Created successfully");
        fetchData();
      } else {
        alert(data.message || "Save failed");
      }
    } catch (error) {
      console.error("Save error:", error);
      alert("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-5xl">
      <h1 className="mb-6 text-3xl font-bold">Services Section Admin</h1>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Heading
          </label>
          <input
            type="text"
            value={formData.heading}
            onChange={(e) => handleTopChange("heading", e.target.value)}
            placeholder="Example: Our Services"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <div className="mb-8">
          <label className="mb-2 block text-sm font-semibold text-gray-800">
            Subheading
          </label>
          <textarea
            value={formData.subheading}
            onChange={(e) => handleTopChange("subheading", e.target.value)}
            placeholder="Short description"
            className="min-h-[100px] w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <div className="space-y-5">
          {formData.services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Service {index + 1}</h2>

                {formData.services.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeService(index)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Service Title
                </label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) =>
                    handleServiceChange(index, "title", e.target.value)
                  }
                  placeholder="Example: Buying House Service"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Service Description
                </label>
                <textarea
                  value={service.description}
                  onChange={(e) =>
                    handleServiceChange(index, "description", e.target.value)
                  }
                  placeholder="Service description"
                  className="min-h-[100px] w-full rounded-xl border border-gray-300 px-4 py-3"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={addService}
            className="rounded-xl bg-purple-600 px-5 py-3 text-white"
          >
            + Add Service
          </button>

          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white disabled:opacity-60"
          >
            {saving ? "Saving..." : editingId ? "Update Section" : "Save Section"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={handleDelete}
              className="rounded-xl bg-red-600 px-6 py-3 text-white"
            >
              Delete Section
            </button>
          )}
        </div>
      </form>
    </div>
  );
}