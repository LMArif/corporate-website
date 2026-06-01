export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Select a page from the sidebar to manage its sections.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Home</h2>
          <p className="text-gray-600">Manage homepage sections.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-600">Manage about page sections.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Buying House</h2>
          <p className="text-gray-600">Manage buying house page sections.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Factory</h2>
          <p className="text-gray-600">Manage factory page sections.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-600">Manage contact page sections.</p>
        </div>
      </div>
    </div>
  );
}