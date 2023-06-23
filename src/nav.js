import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import links from "./nav.json";

function Navigation() {
  const { currentUser } = useSelector((state) => state.users);
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="nav nav-pills mt-2 mb-2">
      {!currentUser && (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </>
      )}
      {currentUser && (
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      )}
      {links.map(({ path, label }) => (
        <Link
          key={path}
          className={`nav-link ${pathname === path ? "active" : ""}`}
          to={path}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
