import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-[#b99494] text-[#222] flex flex-col">
        <div className="p-4 text-2xl font-bold">Admin Panel</div>
        <nav className="flex-1">
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <a href="#">Dashboard</a>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <a href="#">Users</a>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">© 2025 Admin</div>
      </aside>

      <main className="flex-1 bg-gray-100">
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" href={"/login"}>
            Logout
          </Link>
        </header>

        <div className="p-6">
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-lg font-semibold mb-2">Welcome to the Admin Panel</h2>
            <p className="text-gray-600">
              Use the sidebar to navigate through the admin options.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
