import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "./navbar.css";
import itsbIcon from "../images/itsb_icon.svg";
import homeIcon from "../images/home.svg";
import pageIcon from "../images/page.svg";
import vizIcon from "../images/visualization.svg";
import searchIcon from "../images/search.svg";

const Header = ({ siteTitle }) => (
  <div className="title">
    <Link to="/">
      <div>
        <img
          className="title-icon"
          src={itsbIcon}
          alt="ITSB Icon: A concentric circle."
        />
        <span className="title-text">{siteTitle}</span>
      </div>
    </Link>
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
    <nav className="navbar" style={{ paddingBottom: "2rem" }}>
      <Header siteTitle="In The Same Boat" />
      <div className="main-menu">
        <Link to="/">
          {" "}
          <div className="menu-item">
            <img className="menu-icon" src={homeIcon} alt="A home." />
            <span className="menu-text">Home</span>
          </div>
        </Link>
        <Link to="/instructions">
          {" "}
          <div className="menu-item">
            <img className="menu-icon" src={pageIcon} alt="A circle." />
            <span className="menu-text">Instructions</span>
          </div>
        </Link>
        <Link to="/trajectories">
          {" "}
          <div className="menu-item">
            <img className="menu-icon" src={vizIcon} alt="An eye." />
            <span className="menu-text">Trajectories</span>
          </div>
        </Link>
        <Link to="/intersections">
          {" "}
          <div className="menu-item">
            <img className="menu-icon" src={vizIcon} alt="An eye." />
            <span className="menu-text">Intersections</span>
          </div>
        </Link>
        <Link to="/search">
          {" "}
          <div className="menu-item">
            <img
              className="menu-icon"
              src={searchIcon}
              alt="A magnifying glass."
            />
            <span className="menu-text">Search</span>
          </div>
        </Link>
        <Link to="/credits">
          {" "}
          <div className="menu-item">
            <img className="menu-icon" src={pageIcon} alt="A circle." />
            <span className="menu-text">Credits</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
