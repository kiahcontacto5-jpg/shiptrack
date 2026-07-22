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

export default App;
