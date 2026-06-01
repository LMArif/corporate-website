import Link from "next/link";

export default function AdminHomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Home Page Sections</h1>
      <p className="text-gray-600 mb-8">
        Click a section to edit homepage content.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/admin/home/hero"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Hero Section</h2>
          <p className="text-gray-600">
            Edit hero title, subtitle, description, button and image.
          </p>
        </Link>

        <Link
          href="/admin/home/services-section"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Services Section</h2>
          <p className="text-gray-600">
            Edit homepage service cards and details.
          </p>
        </Link>

        <Link
          href="/admin/home/why-choose-us"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
          <p className="text-gray-600">
            Manage why choose us section content.
          </p>
        </Link>

        <Link
          href="/admin/home/home-process"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Home Process</h2>
          <p className="text-gray-600">
            Manage process steps and descriptions.
          </p>
        </Link>

        <Link
          href="/admin/home/cta"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">CTA Section</h2>
          <p className="text-gray-600">
            Manage homepage call-to-action section.
          </p>
        </Link>
      </div>
    </div>
  );
}