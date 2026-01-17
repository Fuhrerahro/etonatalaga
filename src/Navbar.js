import "./Navbar.css";
import logo from "../src/logo.png"; // 👈 add this

export default function Navbar({
  darkMode,
  toggleDarkMode,
  loggedIn,
  toggleLogin
}) {
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      
      {/* LOGO */}
      <div className="logo-container">
        <img src={logo} alt="ConnectEd Logo" className="logo-img" />
        <h2 className="logo-text">CONNECTed</h2>
      </div>

      <div className="nav-actions">
        <button onClick={toggleDarkMode}>🌓</button>

        <button
  onClick={() => {
    window.location.href = "https://fuhrerahro.github.io/techno/";
  }}
>
  Join
</button>


        <button
          onClick={() =>
            document
              .getElementById("mentor-list")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore
        </button>

        <div className="dropdown">
          <button>Categories ▾</button>
          <div className="dropdown-content">
            <span>Web Development</span>
            <span>UI/UX Design</span>
            <span>Data Science</span>
            <span>Marketing</span>
            <span>Photography</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
