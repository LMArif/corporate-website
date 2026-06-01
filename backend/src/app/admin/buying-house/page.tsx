import Link from "next/link";

export default function BuyingHouseAdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Buying House Page Sections</h1>
      <p className="text-gray-600 mb-8">
        Click a section to edit buying house page content.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/admin/buying-house/hero"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Hero Section</h2>
          <p className="text-gray-600">
            Edit buying house hero title, subtitle and description.
          </p>
        </Link>

        <Link
          href="/admin/buying-house/services"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Services Section</h2>
          <p className="text-gray-600">
            Manage buying house services cards and details.
          </p>
        </Link>

        <Link
          href="/admin/buying-house/product-expertise"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Product Expertise</h2>
          <p className="text-gray-600">
            Manage product expertise section title and description.
          </p>
        </Link>

        <Link
          href="/admin/buying-house/product-gallery"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Product Gallery</h2>
          <p className="text-gray-600">
            Manage buying house product gallery categories and items.
          </p>
        </Link>

        <Link
          href="/admin/buying-house/process"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Process Section</h2>
          <p className="text-gray-600">
            Manage buying house process steps and descriptions.
          </p>
        </Link>

        <Link
          href="/admin/buying-house/cta"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">CTA Section</h2>
          <p className="text-gray-600">
            Manage buying house call-to-action section.
          </p>
        </Link>
      </div>
    </div>
  );
}