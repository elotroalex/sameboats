import React from "react";
import { Link } from "gatsby";
import "./navbar.css";
import { menuData } from "../data/menuData";
import styled from "styled-components";
import logo from "../images/itsb_icon.svg";

// HEADER

const Title = styled.div`
  height: 4rem;
  background: #fcb040;
`;

const TitleLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  flex-flow: row nowrap;
`;

const TitleText = styled.span`
  text-transform: uppercase;
  padding-top: 1.4rem;
`;

const TitleIcon = styled.img`
  padding: 1rem;
  height: 30px;
  width: 2rem;
`;

const Header = () => (
  <Title>
    <TitleLink to="/">
      <TitleIcon src={logo} alt="Same Boats Logo" />
      <TitleText>In The Same Boat</TitleText>
    </TitleLink>
  </Title>
);

// NAVBAR

export default function Navbar() {
  return (
    <nav className="navbar">
      <Header />
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
