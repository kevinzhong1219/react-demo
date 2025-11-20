export default function Header() {
  return (
    <header style={{ padding: "16px", background: "#f0f0f0" }}>
      <h2>My Demo Website</h2>
      <nav>
        <a href="#" style={{ marginRight: 12 }}>
          Home
        </a>
        <a href="#" style={{ marginRight: 12 }}>
          About
        </a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
