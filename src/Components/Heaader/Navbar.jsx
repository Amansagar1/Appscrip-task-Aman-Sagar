"use client";

import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBagDash } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar__main">
        <div className="navbar__container">
          <GiHamburgerMenu className="hamburger__icon" onClick={toggleMenu} />
          <Image className="nav__logo" src={Logo} alt="logo" />
          <h1 className="navbar__logotitle">LOGO</h1>
          <div className="navbar__icon">
            <IoIosSearch className="icon" />
            <CiUser className="icon" />
            <CiHeart className="icon" />
            <BsBagDash className="icon" />
            <div className="navbar__lang">
              <h1 className="lang">Eng</h1>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div className={`navbar__components ${showMenu ? "show" : ""}`}>
          <Link href="" className="navbar__shop">
            SHOP
          </Link>
          <Link href="" className="navbar__shop">
            SKILLS
          </Link>
          <Link href="" className="navbar__shop">
            STORIES
          </Link>
          <Link href="" className="navbar__shop">
            ABOUT
          </Link>
          <Link href="" className="navbar__shop">
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
