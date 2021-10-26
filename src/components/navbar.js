import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "./navbar.css";
import itsbIcon from "../images/itsb_icon.svg";
import { useStaticQuery, graphql } from "gatsby";

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
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            icon
            alt
          }
        }
      }
    }
  `);

  return (
    <nav className="navbar" style={{ paddingBottom: "2rem" }}>
      <Header siteTitle="In The Same Boat" />
      <div className="main-menu">
        {data.site.siteMetadata.menuLinks.map((link) => (
          <Link to={link.link}>
            {" "}
            <div className="menu-item">
              <img className="menu-icon" src={link.icon} alt={link.alt} />
              <span className="menu-text">{link.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
