import React from "react";
import "./Header.css";
import Logo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeIcon from "../assets/header/theme-switch.png"
const Header = () => {
  return (
    <>
      <div className="head">
        <div className="LogoContainer" className="Cryptoani" alt="aninftlogo">
          <img src={Logo} className="punkLogo" />
        </div>
        <div className="searchBar">
          <div className="searchIconContainer">
            <img src={searchIcon} />
            <input
              className="searchInput"
              placeholder="Collection, item or user ..."
            />
          </div>
        </div>

        <div className="headerItems">
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>

        </div>
        <div className="headerAction">
            <div className="themeSwitcher">
                <img src={themeIcon} alt=""/>
            </div>
        </div>

        <div className="loginButton">
            GET IN
        </div>
      </div>
    </>
  );
};

export default Header;
