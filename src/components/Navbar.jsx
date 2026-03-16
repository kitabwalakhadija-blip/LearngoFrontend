import React, { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="/AboutUs">AboutUs</a>
          <a href="/contact">ContactUs</a>
          <a href="/contact">Faculty Login</a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <a id="main-login" href="/login">
          
        </a>

        <input type="text" className="search-box" placeholder="Search..." />
        <button className="search-btn">Search</button>

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
