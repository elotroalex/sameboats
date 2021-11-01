import React from "react";
import { Link } from "gatsby";
import { menuData } from "../data/menuData";
import styled from "styled-components";
import logo from "../images/itsb_icon.svg";
import { FaBars } from "react-icons/fa";

// HEADER

const Title = styled.div`
  height: 4rem;
  background: #fcb040;
  width: 100%;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  @media only screen and (max-width: 963px) {
    justify-content: space-between;
  }
`;

const TitleText = styled.span`
  text-transform: uppercase;
`;

const TitleIcon = styled.img`
  padding: 1rem;
  height: 30px;
  width: 2rem;
`;

const BarsToggle = styled.div`
  display: none;
  padding: 1rem;

  @media only screen and (max-width: 963px) {
    display: flex;
`;

const Bars = styled(FaBars)`
  color: #000;
  font-size: 1.4rem;
`;

// function ToggleMenu() {
//   var element = document.getElementById("main-menu");
//   if (element.style.display === "none") {
//     element.style.display = "block";
//   } else {
//     element.style.display = "none";
//   }
// }

const Header = () => (
  <Title>
    <TitleIcon src={logo} alt="Same Boats Logo" />
    <TitleText>In The Same Boat</TitleText>

    {/* Onclick call: onClick={ToggleMenu()} */}
    <BarsToggle>
      <Bars />
    </BarsToggle>
  </Title>
);

// NAVBAR

const MainMenu = styled.div`
  background: black;
  height: 100%;
  padding-top: 3rem;

  @media only screen and (max-width: 963px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  padding-left: 0.4rem;
  height: 3rem;
  clear: both;
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0 1rem;
`;

const MenuText = styled.span`
  margin: 0;
  font-size: 1rem;
  text-transform: uppercase;
`;

export default function Navbar() {
  return (
    <nav className="navbar">
      <Header />
      <MainMenu id="main-menu">
        {menuData.map((link) => (
          <MenuItem key={link.name}>
            <MenuLink to={link.link}>
              {" "}
              <MenuIcon src={link.icon} alt={link.alt} />
              <MenuText>{link.name}</MenuText>
            </MenuLink>
          </MenuItem>
        ))}
      </MainMenu>
    </nav>
  );
}
