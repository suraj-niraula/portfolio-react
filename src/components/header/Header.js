import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to={"/home"}>
          <img className="logo" src={Logo} alt="" />
          </Link>
          <div className="nav-menu">
            <Link to={"/home"} className="nav-menu-items">
              Home
            </Link>
            <Link to={"/skills"} className="nav-menu-items">
              Skills
            </Link>
            <Link to={"/portfolio"} className="nav-menu-items">
              Portfolio
            </Link>
            <Link to={"/contact"} className="nav-menu-items">
              Contact
            </Link>
          </div>
          {/* mobile */}
          <div className="bx bx-menu" id="mob-menu" onClick={() => setShowMenu(!showMenu)}></div>
          <div className="nav-menu-mob" style={{display: showMenu ? 'flex' : 'none'}}>
          <div className="close-button" onClick={() => setShowMenu(false)}>
          <span>&times;</span>
          </div>
            <Link to={"/home"} className="nav-menu-small" 
            onClick={()=> setShowMenu(!showMenu)}>
              Home
            </Link>
            <Link to={"/skills"} className="nav-menu-small" onClick={()=> setShowMenu(false)}>
              Skills
            </Link>
            <Link to={"/portfolio"} className="nav-menu-small"  onClick={()=> setShowMenu(false)}>
              Portfolio
            </Link>
            <Link to={"/contact"} className="nav-menu-small" onClick={()=> setShowMenu(false)}>
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
