import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <main className="text-center mt-20">
        <h2 className="text-4xl font-bold">
          Welcome to ShipTrack
        </h2>

        <p className="mt-4 text-gray-600">
          Fast, secure and reliable shipping worldwide.
        </p>
      </main>
    </div>
  );
}

export default App;        <div className="max-w-4xl mx-auto text-center">
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
