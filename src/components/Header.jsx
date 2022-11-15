import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/bootstrap.min.css";
import "../styles/styles.css";

export default function Header() {
  return (
    <div className="vh-100">
      <header className="sticky">
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
          <div className="container-fluid px-5">
            <Link to="/" className="navbar-brand" href="#">
              El Salvador
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor03"
              aria-controls="navbarColor03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" href="#">
                    Home
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="devs" className="nav-link">
                    Desarrolladores
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contacts" className="nav-link" href="#">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
