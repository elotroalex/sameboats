import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "./navbar.css";
import itsbIcon from "../images/itsb_icon.svg";
import { menuData } from "../data/menuData";

const Header = ({ siteTitle }) => (
  <div className="title">
    <Link to="/">
      <div>
        <img
          className="title-icon"
          src={itsbIcon}
          alt="Same Boats Logo: A concentric circle."
        />
        <span className="title-text">{siteTitle}</span>
      </div>
    </Link>
    <script></script>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default function Navbar() {
  return (
    <nav className="navbar">
      <Header siteTitle="In The Same Boat" />
      <div className="main-menu">
        {menuData.map((link) => (
          <div key={link.name} className="menu-item">
            <Link to={link.link}>
              {" "}
              <img className="menu-icon" src={link.icon} alt={link.alt} />
              <span className="menu-text">{link.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
