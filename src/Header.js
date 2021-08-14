import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
function Header({ isMenuOpen, setisMenuOpen }) {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ElLEkXb6fBdHDuEcFHKlB_72gpiyDb2A2g&usqp=CAU"
            alt="logo"
            className="header__logoImg"
          />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/iphone6">iphone 6</Link>
        <Link to="/iphone7">iphone 7</Link>
        <Link to="/iphone8">iphone 8</Link>
        <Link to="/iphoneX">iphone X</Link>
        <Link to="/iphoneXI">iphone XI</Link>
        <Link to="/iwatch"> i Watch</Link>
        <Link to="/macbookair">Macbook air</Link>
        <Link to="/macbookpro">MacBook Pro</Link>
      </div>
      <div className="header__right">
        <Link to="/" className={isMenuOpen && "header__right--hidden"}>
          Shop
        </Link>
        <Link to="/login" className={isMenuOpen && "header__right--hidden"}>
          AppleAccount
        </Link>
        <div
          className="header__rightMenu"
          onClick={() => setisMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}

export default Header;
