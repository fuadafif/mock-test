import { useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Button, Dropdown } from "reactstrap";
import style from "../../styles/Navbar.module.css";
import DropdownButton from "../dropdown/Dropdown";
import { useSelector } from "react-redux";
import Image from 'next/image'

function LandingNav() {

  const { username } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = document.getElementById("user");
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    const loginUser = document.getElementById("loginUser");
    if (username !== true) {
      loginUser.innerHTML = `Welcome, ${username}`;
      user.hidden = false;
      register.hidden = true;
      login.hidden = true;
    } else {
      register.hidden = false;
      login.hidden = false;
      user.hidden = true;
    }
  });

  return (
    <>
      {/* Navbar */}
      <Navbar className={style.navbar} color="dark" dark>
        {/* NavBrand */}
        <NavbarBrand href="/">
          <Image
            alt="logo"
            src="/img/gaming.jpg"
            className="d-inline"
            height= {50}
            width= {50}
          />
        </NavbarBrand>
        {/* Nav */}
        <Nav>
          <NavItem>
            <NavLink
              className={style.link}
              href="/home"
              activeStyle
            >
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className={style.link} href="#" activeStyle>
              About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className={style.link} href="#" activeStyle>
              Contact
            </NavLink>
          </NavItem>
        </Nav>

        <Nav>
          <NavItem hidden id="login">
            <NavLink
              className={style.link}
              href="/login"
              activeStyle
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem hidden id="register">
            <NavLink
              className={(style.link, style.signup)}
              href="/register"
              activeStyle
            >
              Sign Up
            </NavLink>
          </NavItem>

          <NavItem hidden id="user" className="navbar navbar-expand-sm">
            <NavLink
              className={(style.link, style.signup)}
              id="loginUser"
              href="/profile"
              activeStyle
            >
            </NavLink>
            <DropdownButton/>
          </NavItem>

        </Nav>
      </Navbar>
    </>
  );
}

export default LandingNav;
