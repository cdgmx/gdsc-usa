import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="navbar  navbar-expand-xl fixed-top navbar-light bg-light border-bottom ">
      <div className="container-fluid ">
        <Link href="/">
          <div className="nav-brand logo ms-sm-5 nav-link">
            <img alt="Logo" />
            <span className="gd">Google Developer Student Clubs</span>
            <br />
            <span className="school">University of San Agustin</span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-5" id="navbarNavDropdown">
          <ul className="nav navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/a" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/b" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/c" className="nav-link">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/d" className="nav-link">
                Team
              </Link>
            </li>
            <li className="nav-item register">
              <Link href="/e" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
