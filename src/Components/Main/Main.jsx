"use client";
import { useState } from "react";
import "./Main.css";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdArrowBackIos } from "react-icons/md";
import Items from "./items/Items";
function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="main">
      <div className="main__titlebox">
        <h1 className="main__heading">DISCOVER OUR PRODUCTS</h1>
        <p className="main__paragraph">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className="main__container">
        <div className="main__indicaterbox">
          <div className="indicator__counting">
            <h3 className="iteam__count">3425 ITEMS</h3>
            <Link href="/" className="filter__head">
              <MdArrowBackIos />
              <h4>HIDE FILTER</h4>
            </Link>
          </div>
          <div onClick={toggleDropdown} className="indicator__recomanded">
            <button className="recommend__btn">{selectedOption}</button>
            <RiArrowDropDownLine />
            {isOpen && (
              <div className="dropdown-content">
                <Link href="/" onClick={() => handleOptionClick("RECOMMENDED")}>
                  RECOMMENDED
                </Link>
                <Link
                  href="/"
                  onClick={() => handleOptionClick("NEWEST FIRST")}
                >
                  NEWEST FIRST
                </Link>
                <Link href="/" onClick={() => handleOptionClick("POPULAR")}>
                  POPULAR
                </Link>
                <Link
                  href="/"
                  onClick={() => handleOptionClick("PRICE: HIGH TO LOW")}
                >
                  PRICE: HIGH TO LOW
                </Link>
                <Link
                  href="/"
                  onClick={() => handleOptionClick("PRICE: LOW TO HIGH")}
                >
                  PRICE: LOW TO HIGH
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Items />
    </div>
  );
}

export default Main;
