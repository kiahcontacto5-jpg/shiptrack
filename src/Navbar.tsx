export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">🚚 ShipTrack</h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Track</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}
