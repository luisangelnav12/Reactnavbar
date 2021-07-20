import React, { useState } from "react";
// import { ReactComponent as CloseMenu } from "../assets/x.svg";
// import { ReactComponent as MenuIcon } from "../assets/menu.svg";
// import { ReactComponent as Logo } from "../assets/logo.svg";
import "./header.css";
const x = "../assets/x.svg";
const menu = "../assets/menu.svg";
const logo = "../assets/logo.png";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <img src={logo} className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/#item1">Inicio</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/#item2">Nosotros</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/#item3">Servicios</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/#item3">Contacto</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/#item3">Unete al equipo</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/#item3">Aula virtual</a>
          </li>

          {/* <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li> 
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>*/}
       
        </ul>
      </div>
      {/* <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
        </li>
      </ul> */}
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <img src={x} className="menu-icon" />
        ) : (
          <img src={menu} className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
