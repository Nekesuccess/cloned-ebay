import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInfoCircle } from "react-icons/fa";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiQuestionMark } from "react-icons/ri";
import "./Footer.css";
import { FaLess } from "react-icons/fa6";

const Footer = () => {
  const [showDRop, setShowDrop] = useState(false);
  return (
    <>
      <footer className="main_footer">
        <div className="footer_wrapper">
          <div className="list_wrapper">
            <div className="each_list">
              <h3 className="list_title">Buy</h3>
              <ul className="list_links">
                <li>
                  <a href="">Registration</a>
                </li>
                <li>
                  <a href="">Bidding & buying help</a>
                </li>
                <li>
                  <a href="">Stores</a>
                </li>
                <li>
                  <a href="">Creator Collections</a>
                </li>
                <li>
                  <a href="">eBay for Charity</a>
                </li>
                <li>
                  <a href="">Charity Shop</a>
                </li>
                <li>
                  <a href="">Seasonal Sales and events</a>
                </li>
                <li>
                  <a href="">eBay Gift Cards</a>
                </li>
              </ul>
            </div>

            <div className="each_list">
              <h3 className="list_title">Sell</h3>
              <ul className="list_links">
                <li>
                  <a href="">Start selling</a>
                </li>
                <li>
                  <a href="">How to sell</a>
                </li>
                <li>
                  <a href="">Business sellers</a>
                </li>
                <li>
                  <a href="">Affiliates</a>
                </li>
              </ul>

              <h3 className="list_title">Tools & Apps</h3>
              <ul className="list_links">
                <li>
                  <a href="">Developers</a>
                </li>
                <li>
                  <a href="">Security center</a>
                </li>
                <li>
                  <a href="">Site map</a>
                </li>
              </ul>
            </div>

            <div className="each_list">
              <h3 className="list_title">eBay companies</h3>
              <ul className="list_links">
                <li>
                  <a href="">TCGplayer</a>
                </li>
              </ul>

              <h3 className="list_title">Stay connected</h3>
              <div className="social_list">
                <a href="" className="social_item">
                  <span className="social_icon">
                    <FaFacebookF />
                  </span>
                  Facebook
                </a>
                <a href="" className="social_item">
                  <span className="social_icon">
                    <FaTwitter />
                  </span>
                  X (Twitter)
                </a>
              </div>
            </div>

            <div className="each_list">
              <h3 className="list_title">About eBay</h3>
              <ul className="list_links">
                <li>
                  <a href="">Company info</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Deferred Prosecution Agreement</a>
                </li>
                <li>
                  <a href="">Investors</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Diversity & Inclusion</a>
                </li>
                <li>
                  <a href="">Global Impact</a>
                </li>
                <li>
                  <a href="">Government relations</a>
                </li>
                <li>
                  <a href="">Advertise with us</a>
                </li>
                <li>
                  <a href="">Policies</a>
                </li>
                <li>
                  <a href="">Verified Rights Owner (VeRO)</a>
                </li>
                <li>
                  <a href="">eCI Licenses</a>
                </li>
              </ul>
            </div>

            <div className="each_list">
              <h3 className="list_title">Help & Contact</h3>
              <ul className="list_links">
                <li>
                  <a href="">Seller Center</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">eBay Returns</a>
                </li>
                <li>
                  <a href="">Money Back Guarantee</a>
                </li>
              </ul>

              <h3 className="list_title">Community</h3>
              <ul className="list_links">
                <li>
                  <a href="">Announcements</a>
                </li>
                <li>
                  <a href="">eBay Community</a>
                </li>
                <li>
                  <a href="">eBay for Business Podcast</a>
                </li>
              </ul>

              <h3 className="list_title">eBay Sites</h3>
              <div className="flag_wrapper">
                <button className="flag_btn">
                  <img src="./image.png" alt="" className="flag" />
                  <p className="states">united states</p>
                  <IoIosArrowDown
                    className="arrow"
                    onClick={() => setShowDrop(!showDRop)}
                    onMouseEnter={() => setShowDrop(true)}
                    onMouseLeave={() => setShowDrop(false)}
                  />
                </button>
                {showDRop ? <DropDown /> : null}
              </div>
            </div>
          </div>

          <div className="legal_text">
            <div className="legal_links">
              <p className="link">
                Copyright © 1995-2025 eBay Inc. All Rights Reserved.
              </p>
              <a href="">Accessibility</a>, <a href="">User Agreement</a>,
              <a href="">Privacy</a>, <a href="">Consumer Health Data</a>,
              <a href="">Payments Terms</a>, <a href="">Cookies</a>,
              <a href="">CA Privacy Notice</a>,{" "}
              <a href="">Your Privacy Choices</a>
              <span className="icons">
                <img src="./mark.svg" alt="" className="mark" />
              </span>
              and <a href="#">AdChoice</a>
              <span className="icons">
                <FaInfoCircle className="mark" />
              </span>
            </div>
          </div>

          <div className="arrow2">
            <div className="circle">
              <IoIosArrowUp className="arrow4" />
            </div>
            <div className="circle">
              <RiQuestionMark className="arrow4" />
            </div>
          </div>
        </div>
      </footer>
      <div className="footer2">
        <div className="mobile">
          <div className="mobile_wrapper">
            <div className="up">
              <ul className="up_text">
                <li>Home</li>
                <li>Sign in / Register</li>
                <li>Sell an item</li>
                <li>Help & Contact</li>
                <li> Download the free eBay apps</li>
              </ul>
            </div>
            <div className="Down">
              <span>
                <a href="">Site map</a>,<a href="">User Agreement</a>,
                <a href="">Privacy</a>,<a href="">Cookies</a>,& ,
                <a href="">AdChoice</a>,
              </span>
              <span className="eBay">© 1995-2025 eBay Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;