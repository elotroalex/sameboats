import React from "react";
import { Link } from "gatsby";
import { menuData } from "../data/menuData";
import styled from "styled-components";
import logo from "../images/itsb_icon.svg";
import { FaBars } from "react-icons/fa";

// HEADER

const NavBar = styled.nav`
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
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const TitleText = styled.span`
  text-transform: uppercase;
`;

const TitleIcon = styled.img`
  padding: 1rem;
  height: 30px;
  width: 2rem;
`;

// MAIN MENU

const Bars = styled(FaBars)`
  color: #fff;
  font-size: 1.4rem;
  display: none;
  padding: 1rem;
  cursor: pointer;

  @media only screen and (max-width: 963px) {
    display: block;
`;

const MainMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem;
  align-items: center;

  @media only screen and (max-width: 963px) {
    display: none;
    background: black;
    flex-flow: column nowrap;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    height: 40%;
    padding: 3rem;
    z-index: 100;
  }
`;

const MenuItem = styled.div``;

const MenuLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.5rem;
`;

const MenuIcon = styled.img`
  padding-right: 0.33rem;

  @media only screen and (max-width: 963px) {
    padding-right: 1rem;
  }
`;

const MenuText = styled.span`
  color: #fff;
`;

function ToggleMainMenu() {
  var element = document.getElementById("main-menu");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

export default function Navbar() {
  return (
    <NavBar>
      <Title>
        <TitleIcon src={logo} alt="Same Boats Logo" />
        <TitleText>In The Same Boat</TitleText>
      </Title>
      <Bars onClick={ToggleMainMenu} />
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
    </NavBar>
  );
}
