import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiHome, BiCompass, BiBell, BiEnvelope, BiBookmark, BiListUl, BiUser, BiUserPlus, BiDotsHorizontal } from "react-icons/bi";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./navigation-sidebar.css";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[2];
  const { currentUser } = useSelector((state) => state.users);

  let links = [
    { to: 'home', Icon: BiHome, label: 'Home' },
    { to: 'explore', Icon: BiCompass, label: 'Explore' },
    { to: 'messages', Icon: BiEnvelope, label: 'Messages' }
  ];

  if (currentUser) {
    links.push({ to: 'profile', Icon: BiUser, label: 'Profile' });
  } else {
    links.push(
      { to: 'login', Icon: BiUser, label: 'Login' },
      { to: 'register', Icon: BiUserPlus, label: 'Register' }
    );
  }

  return (
    <div className="list-group navigation-sidebar">
      {links.map(({ to, Icon, label }) => (
        <Link
          key={to}
          to={`/driver/${to}`}
          className={`list-group-item border-danger ${active === to ? "active bg-danger fw-bold" : ""}`}
        >
          <Icon className="me-2" />
          <span className="sidebar-text" style={{ fontFamily: "Helvetica" }}>{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavigationSidebar;
