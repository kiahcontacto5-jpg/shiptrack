function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-700 text-white p-4 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ShipTrack</h1>

          <div className="space-x-6">
            <a href="#">Home</a>
            <a href="#">Track</a>
            <a href="#">Book Shipment</a>
            <a href="#">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center py-24 px-6">
        <h2 className="text-5xl font-bold text-blue-700">
          Fast & Reliable Shipping
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Ship packages anywhere in the world with real-time tracking.
        </p>

        <div className="mt-10">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-lg">
            Create Shipment
          </button>
        </div>
      </section>

      {/* Tracking */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold">
            Track Your Shipment
          </h3>

          <div className="mt-8 flex justify-center gap-4">
            <input
              type="text"
              placeholder="Enter Tracking Number"
              className="border p-3 rounded-lg w-80"
            />

            <button className="bg-blue-700 text-white px-6 rounded-lg">
              Track
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
