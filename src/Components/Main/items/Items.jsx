"use client";
import "./Items.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

function Items() {
  const [products, setProducts] = useState([]);
  const [clickedHeart, setClickedHeart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    men: false,
    women: false,
    babyAndKids: false,
  });

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/");
        setProducts(response.data);
        setClickedHeart(new Array(response.data.length).fill(false));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (
        (filterOptions.men && product.category === "men's clothing") ||
        (filterOptions.women && product.category === "women's clothing") ||
        (filterOptions.babyAndKids && product.category === "electronics")
      ) {
        return true;
      }
      if (
        !filterOptions.men &&
        !filterOptions.women &&
        !filterOptions.babyAndKids
      ) {
        return true;
      }
      return false;
    });
    setProducts(filteredProducts);
  }, [filterOptions]);

  const handleProductClick = (productId) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        return prevSelectedProducts.filter((id) => id !== productId);
      } else {
        return [...prevSelectedProducts, productId];
      }
    });
  };

  const handleClick = (index) => {
    const newClickedHeart = [...clickedHeart];
    newClickedHeart[index] = !newClickedHeart[index];
    setClickedHeart(newClickedHeart);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  return (
    <>
      <div className="items__main">
        <div className="Item__left">
          <div className="item__customize">
            <input type="checkbox" />
            <h4>CUSTOMIZABLE</h4>
          </div>
          <div className="items__ideal">
            <h4 className="heading__item" onClick={toggleSubmenu}>
              IDEAL FOR{" "}
              <span>
                <RiArrowDropDownLine />
              </span>{" "}
            </h4>
            {submenuVisible && (
              <div className="submenu__left">
                <label>
                  <input
                    type="checkbox"
                    name="men"
                    checked={filterOptions.men}
                    onChange={handleCheckboxChange}
                  />
                  Men
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="women"
                    checked={filterOptions.women}
                    onChange={handleCheckboxChange}
                  />
                  Women
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="babyAndKids"
                    checked={filterOptions.babyAndKids}
                    onChange={handleCheckboxChange}
                  />
                  Baby & Kids
                </label>
              </div>
            )}
            <p>All</p>
          </div>
          <div className="items__ideal">
            <h4 className="heading__item">
              OCCASION{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </h4>
            <p>All</p>
          </div>
          <div className="items__ideal">
            <h4 className="heading__item">
              WORK{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </h4>
            <p>All</p>
          </div>
          <div className="items__ideal">
            <h4 className="heading__item">
              FABRIC{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </h4>
            <p>All</p>
          </div>
          <div className="items__ideal">
            <h4 className="heading__item">
              SEGMENT{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </h4>
            <p>All</p>
          </div>
          <div className="items__ideal">
            <h4 className="heading__item">
              SUITABLE FOR{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </h4>
            <p>All</p>
          </div>
          <div className="items__ideal">
            <h4 className="heading__item">
              RAW MATERIALS{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </h4>
            <p>All</p>
          </div>
          <div className="items__ideal">
            <h4 className="heading__item">
              PATTERN{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </h4>
            <p>All</p>
          </div>
        </div>
        <div className="item__right">
          <div className="product__fetchcontainer">
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  border: selectedProducts.includes(product.id)
                    ? "2px solid yellow"
                    : "none",
                }}
                className={`cards__Container ${
                  selectedProducts.includes(product.id) ? "selected" : ""
                }`}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="item__cards">
                  <Image
                    className="product__img"
                    src={product.image}
                    width={500}
                    height={500}
                    alt="productimage"
                  />
                  <div className="product__des">
                    <h1 className="product__titleright">{product.title}</h1>
                    <p className="product__para">
                      <Link href="/">Sign in</Link> or Create An Account To See
                      Pricing
                      <CiHeart
                        className="heart__icon"
                        style={{
                          backgroundColor: clickedHeart[index]
                            ? "red"
                            : "transparent",
                        }}
                        onClick={() => handleClick(index)}
                      >
                        ❤️
                      </CiHeart>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
