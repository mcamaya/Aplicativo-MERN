import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import SidebarData from "../data/SidebarData";
import './Navbar.css';

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="icon hamburguesa">
          <FaBars className="icon" onClick={() => toggleSidebar()} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul onClick={() => toggleSidebar()} className="nav-menu__items">
          <li className="navbar-close">
            <Link to="#" className="cerrar">
              <FaWindowClose className="icon" onClick={() => toggleSidebar()}/>
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.class}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
