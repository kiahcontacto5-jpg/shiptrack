import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <main style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Welcome to ShipTrack</h1>
        <p>Fast, secure and reliable shipping worldwide.</p>
      </main>
    </div>
  );
}

export default App;
