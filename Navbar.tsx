export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">
          🚚 ShipTrack
        </h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>

          <a href="#" className="hover:text-gray-200">
            Track
          </a>

          <a href="#" className="hover:text-gray-200">
            Services
          </a>

          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
