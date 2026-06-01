"use client";

import { useState, useEffect } from "react";

type Item = {
  name: string;
  image: string;
};

type Section = {
  subtitle: string;
  items: Item[];
};

type Gallery = {
  _id: string;
  title: string;
  sections: Section[];
  createdAt?: string;
  updatedAt?: string;
};

const GROUP_OPTIONS = [
  "Woven",
  "Knitwear",
  "Denim",
  "Polo",
  "Hoodie",
  "T-Shirt",
  "Outerwear",
  "Casual Wear",
  "Ladies Wear",
  "Kids Wear",
];

export default function ProductGalleryAdminPage() {
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState<Section[]>([
    {
      subtitle: "",
      items: [{ name: "", image: "" }],
    },
  ]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  // Load all existing galleries
  useEffect(() => {
    fetchGalleries();
  }, []);

  const fetchGalleries = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/product-gallery`);
      const data = await res.json();
      if (data.success) {
        setGalleries(data.data || []);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        subtitle: "",
        items: [{ name: "", image: "" }],
      },
    ]);
  };

  const removeSection = (sectionIndex: number) => {
    const updated = [...sections];
    updated.splice(sectionIndex, 1);
    setSections(updated);
  };

  const handleSectionChange = (
    sectionIndex: number,
    value: string
  ) => {
    const updated = [...sections];
    updated[sectionIndex].subtitle = value;
    setSections(updated);
  };

  const addItem = (sectionIndex: number) => {
    const updated = [...sections];
    updated[sectionIndex].items.push({ name: "", image: "" });
    setSections(updated);
  };

  const removeItem = (sectionIndex: number, itemIndex: number) => {
    const updated = [...sections];
    updated[sectionIndex].items.splice(itemIndex, 1);
    setSections(updated);
  };

  const handleItemChange = (
    sectionIndex: number,
    itemIndex: number,
    field: "name" | "image",
    value: string
  ) => {
    const updated = [...sections];
    updated[sectionIndex].items[itemIndex][field] = value;
    setSections(updated);
  };

  const validateForm = () => {
    if (!title.trim()) {
      alert("Please enter a group title.");
      return false;
    }

    for (let s = 0; s < sections.length; s++) {
      if (!sections[s].subtitle.trim()) {
        alert(`Please enter subtitle for Section ${s + 1}.`);
        return false;
      }

      if (!sections[s].items.length) {
        alert(`Please add at least one item in Section ${s + 1}.`);
        return false;
      }

      for (let i = 0; i < sections[s].items.length; i++) {
        const item = sections[s].items[i];

        if (!item.name.trim()) {
          alert(`Please enter name for Item ${i + 1} in Section ${s + 1}.`);
          return false;
        }

        if (!item.image.trim()) {
          alert(
            `Please enter image path for Item ${i + 1} in Section ${s + 1}.`
          );
          return false;
        }
      }
    }

    return true;
  };

  const resetForm = () => {
    setTitle("");
    setSections([
      {
        subtitle: "",
        items: [{ name: "", image: "" }],
      },
    ]);
    setEditingId(null);
  };

  const handleEdit = (gallery: Gallery) => {
    setTitle(gallery.title);
    setSections(gallery.sections);
    setEditingId(gallery._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this gallery? This action cannot be undone.")) {
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/product-gallery/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        alert("Gallery deleted successfully.");
        fetchGalleries(); // Refresh the list
        if (editingId === id) {
          resetForm();
          setShowForm(false);
        }
      } else {
        alert(data.message || "Error deleting gallery.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong while deleting.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setSaving(true);

      const url = editingId
        ? `${API_URL}/api/product-gallery/${editingId}`
        : `${API_URL}/api/product-gallery`;
      
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          sections,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert(editingId ? "Gallery updated successfully." : "Product gallery saved successfully.");
        resetForm();
        setShowForm(false);
        fetchGalleries(); // Refresh the list
      } else {
        alert(data.message || (editingId ? "Error updating gallery." : "Error creating gallery."));
      }
    } catch (error) {
      console.error("Save error:", error);
      alert("Something went wrong while saving.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Product Gallery Admin
        </h1>
        <p className="mt-2 text-gray-600">
          From this page, you can manage the product gallery of the Buying House
        </p>
      </div>

      {/* Create New Button */}
      {!showForm && (
        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="mb-6 rounded-xl bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
        >
          + Create New Gallery
        </button>
      )}

      {/* Form for Create/Edit */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {editingId ? "Edit Gallery" : "Create New Gallery"}
            </h2>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                resetForm();
              }}
              className="rounded-lg bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>

          <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <h2 className="mb-2 text-lg font-semibold text-blue-900">
              Gallery Group Information
            </h2>
            <p className="text-sm text-blue-800">
              Example: Woven, Knitwear, Denim, Polo
            </p>
          </div>

          <div className="mb-8">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Group Title
            </label>

            <select
              value={GROUP_OPTIONS.includes(title) ? title : "custom"}
              onChange={(e) => {
                if (e.target.value === "custom") {
                  setTitle("");
                } else {
                  setTitle(e.target.value);
                }
              }}
              className="mb-3 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            >
              <option value="">Select Group</option>
              {GROUP_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
              <option value="custom">Custom (type manually)</option>
            </select>

            {!GROUP_OPTIONS.includes(title) && title !== "" && (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Type custom group title"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            )}
          </div>

          <div className="space-y-8">
            {sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Section {sectionIndex + 1}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Example: Five Pocket Twill, T-Shirt, Polo
                    </p>
                  </div>

                  {sections.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSection(sectionIndex)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                    >
                      Remove Section
                    </button>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Section Subtitle
                  </label>
                  <input
                    type="text"
                    value={section.subtitle}
                    onChange={(e) =>
                      handleSectionChange(sectionIndex, e.target.value)
                    }
                    placeholder="Example: Five Pocket Twill"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <h4 className="text-base font-semibold text-gray-900">
                          Item {itemIndex + 1}
                        </h4>

                        {section.items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeItem(sectionIndex, itemIndex)}
                            className="rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200"
                          >
                            Remove Item
                          </button>
                        )}
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-800">
                            Item Name
                          </label>
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) =>
                              handleItemChange(
                                sectionIndex,
                                itemIndex,
                                "name",
                                e.target.value
                              )
                            }
                            placeholder="Example: Men's Five Pocket TRS"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-800">
                            Image Path
                          </label>
                          <input
                            type="text"
                            value={item.image}
                            onChange={(e) =>
                              handleItemChange(
                                sectionIndex,
                                itemIndex,
                                "image",
                                e.target.value
                              )
                            }
                            placeholder="Example: /images/product1.jpg"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => addItem(sectionIndex)}
                    className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
                  >
                    + Add New Item
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={addSection}
              className="rounded-xl bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-700"
            >
              + Add New Section
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {saving ? "Saving..." : editingId ? "Update Gallery" : "Save Gallery"}
            </button>
          </div>
        </form>
      )}

      {/* Existing Galleries List */}
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Existing Galleries</h2>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading galleries...</p>
          </div>
        ) : galleries.length === 0 ? (
          <div className="rounded-xl bg-gray-50 p-8 text-center">
            <p className="text-gray-600">No galleries found. Create your first gallery!</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleries.map((gallery) => (
              <div
                key={gallery._id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{gallery.title}</h3>
                  <p className="text-sm text-gray-500">
                    {gallery.sections.length} Section(s) | Total Items:{" "}
                    {gallery.sections.reduce((acc, sec) => acc + sec.items.length, 0)}
                  </p>
                  {gallery.updatedAt && (
                    <p className="text-xs text-gray-400 mt-1">
                      Last updated: {new Date(gallery.updatedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
                
                <div className="mb-4 max-h-32 overflow-y-auto">
                  {gallery.sections.slice(0, 2).map((section, idx) => (
                    <div key={idx} className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold">{section.subtitle}:</span>{" "}
                      {section.items.length} item(s)
                    </div>
                  ))}
                  {gallery.sections.length > 2 && (
                    <p className="text-xs text-gray-400">+{gallery.sections.length - 2} more sections</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(gallery)}
                    className="flex-1 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(gallery._id)}
                    className="flex-1 rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}