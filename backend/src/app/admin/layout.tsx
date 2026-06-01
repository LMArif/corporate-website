import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-4 text-sm">
          <Link href="/admin" className="hover:text-blue-400">
            Dashboard
          </Link>

          <Link href="/admin/home" className="hover:text-blue-400">
            Home
          </Link>

          <Link href="/admin/about" className="hover:text-blue-400">
            About
          </Link>

          <Link href="/admin/buying-house" className="hover:text-blue-400">
            Buying House
          </Link>


          <Link href="/admin/factory" className="hover:text-blue-400">
            Factory
          </Link>

          <Link href="/admin/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}