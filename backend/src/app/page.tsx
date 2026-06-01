import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Alliance Sourcing BD
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        This corporate website provides information about our company,
        buying house services, factory facilities, and contact details.
        Administrators can manage all website content through the admin panel.
      </p>

      <a
        href="/admin"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Admin Panel
      </a>
    </div>
  );
}
