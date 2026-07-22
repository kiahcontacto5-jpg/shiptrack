export default function Navbar() {
  return (
    <nav style={{
      background: "#0B5ED7",
      color: "white",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>🚚 ShipTrack</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Track</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Services</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
}
