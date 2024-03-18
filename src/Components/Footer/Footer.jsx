"use client";
import React from "react";
import "./Footer.css";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGooglePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaMaxcdn } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";

function Footer() {
  return (
    <>
      <footer className="footer__section">
        <div className="footer__main">
          <div className="footer__container">
            <div className="left__footer">
              <div className="left__Text">
                <h1>BE THE FIRST TO KNOW</h1>
                <p>Sign up for updates from mettā muse.</p>
              </div>
              <div className="left__searchbox">
                <input
                  className="SearchBox"
                  placeholder="Enter your e-mail..."
                  type="text"
                />
                <button className="leftsubs__btn">SUBSCRIBE</button>
              </div>
            </div>
            <div className="right__footer">
              <h1>CONTACT US</h1>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
              <h1>CURRENCY</h1>

              <p className="usd">
                <LiaFlagUsaSolid className="flag__icon" />
                USD
              </p>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
          <div className="footer__line"></div>
          <div className="footer__bottom">
            <div className="footer__leftitems">
              <h2>mettā muse</h2>
              <ul className="footerbottem__list">
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div className="footer__centeritems">
              <h2>Quick Links</h2>
              <ul className="footerbottem__list">
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="footer__rightitems">
              <h3>Follow Us</h3>
              <Link className="footerrighticon" href="/">
                <CiInstagram />
                <CiLinkedin />
              </Link>
              <h3>mettā muse Accepts</h3>
              <Link className="footerrightpay" href="/">
                <FaGooglePay />
                <FaCcMastercard />
                <FaPaypal />
                <FaMaxcdn />
                <FaApplePay />
              </Link>
            </div>
          </div>
          <p className="copyright">
            &copy; 2024 Your Appscrip. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
