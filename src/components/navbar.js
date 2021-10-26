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
      <figure className="title-icon">
        <img
          className="logo"
          src={itsbIcon}
          alt="ITSB Icon: A concentric circle."
        />
      </figure>
      <span className="title-text">{siteTitle}</span>
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
    <div className="navbar">
      <Header siteTitle="In The Same Boat" />
      <nav className="navigation" style={{ paddingBottom: "2rem" }}>
        <div className="main-menu">
          <Link to="/">
            {" "}
            <figure className="menu-icon">
              <img className="logo" src={homeIcon} alt="A picture of a home." />
            </figure>
            <span className="menu-title">Home</span>
          </Link>
          <Link to="/instructions">
            {" "}
            <figure className="menu-icon">
              <img className="logo" src={pageIcon} alt="A circle." />
            </figure>
            <span className="menu-title">Instructions</span>
          </Link>
          <Link to="/trajectories">
            {" "}
            <figure className="menu-icon">
              <img className="logo" src={vizIcon} alt="An eye." />
            </figure>
            <span className="menu-title">Trajectories</span>
          </Link>
          <Link to="/intersections">
            {" "}
            <figure className="menu-icon">
              <img className="logo" src={vizIcon} alt="An eye." />
            </figure>
            <span className="menu-title">Intersections</span>
          </Link>
          <Link to="/search">
            {" "}
            <figure className="menu-icon">
              <img
                className="logo"
                src={searchIcon}
                alt="A magnifying glass."
              />
            </figure>
            <span className="menu-title">Search</span>
          </Link>
          <Link to="/credits">
            {" "}
            <figure className="menu-icon">
              <img className="logo" src={pageIcon} alt="A circle." />
            </figure>
            <span className="menu-title">Credits</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
