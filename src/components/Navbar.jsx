import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <nav className="main-navbar">
      {/* LEFT */}
      <div className="nav-left">
        <div className="logo">
          Learn<span>Go</span>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/about">AboutUs</a>
          <a href="/contact">ContactUs</a>
          <a href="/FacultyLogin">Faculty Login</a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <a id="main-login" href="/login"></a>

        <input
          className="search-placholder"
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);

            // 🔴 If input is cleared → go to HOME
            if (value.trim() === "") {
              navigate("/");
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && search.trim() !== "") {
              navigate(`/courses?search=${search}`);
            }
          }}
        />

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
