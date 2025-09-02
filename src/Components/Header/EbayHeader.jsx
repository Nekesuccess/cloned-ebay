import { useState } from "react";
import "./EbayHeader.css";
import {
  IoIosArrowDown,
  IoIosNotificationsOutline,
  IoMdSearch,
} from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import EbayCard from "../Cards/EbayCard";
import MobileHeader from "./MobileHeader";

const EbayHeader = () => {
  const [watchlistShow, setwatchlistShow] = useState(false);
  const [ebayShow, setEbayShow] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [allcategories, setAllCategories] = useState(false);
  const [showElectronics, setShowElectronics] = useState(false);
  const [showMotors, setShowMotors] = useState(false);
  const [showFashion, setShowFashion] = useState(false);
  const [showCollectibles, setCollectibles] = useState(false);
  const [showSports, setShowSports] = useState(false);
  const [showHealth, setShowHealth] = useState(false);
  const [showIndustrial, setShowIndustrial] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showDeals, setShowDeals] = useState(false);
  const [showSell, setShowSell] = useState(false);
  // const [arrowCategory, setArrowCategory]=useState("")
  return (
    <div className="EbayHead-wrapper">
      <div className="Ebayfirst-section">
        <span className="Ebayfirst-section-left">
          <p>
            Hi! <a href="#Sign in">Sign in</a> or{" "}
            <a href="#register">register</a>
          </p>
          <ul className="Ebayfirst-section-left-nav">
            <li>Daily Deals</li>
            <li>Brand Outlet</li>
            <li>Gift Cards</li>
            <li>Help & Contact</li>
          </ul>
        </span>
        <div className="Ebayfirst-section-right">
          <ul className="Ebayfirst-section-right-nav">
            <li>Ship to</li>
            <li>Sell</li>
            <li
              className="li-with-arrow"
              onClick={() => setwatchlistShow(!watchlistShow)}
            >
              Watchlist <IoIosArrowDown />
              {watchlistShow && (
                <div className="Watchlist-drop">
                  <p>Please sign in to view items you are watching.</p>
                </div>
              )}
            </li>
            <li
              className="li-with-arrow2"
              onMouseEnter={() => setEbayShow(true)}
              onMouseLeave={() => setEbayShow(false)}
            >
              My eBay <IoIosArrowDown />
              {ebayShow && (
                <div className="ebay-drop">
                  <ul className="ebay-nav-drop">
                    <li>Summary</li>
                    <li>Recently Viewed</li>
                    <li>Bids/Offers</li>
                    <li>Watchlist</li>
                    <li>Purchase History</li>
                    <li>Buy Again</li>
                    <li>Selling</li>
                    <li>Saved Feed</li>
                    <li>Saved Searches</li>
                    <li>Saved Sellers</li>
                    <li>My Garage</li>
                    <li>Sizes</li>
                    <li>My Collection</li>
                    <li>Messages</li>
                    <li>PSA Vault</li>
                  </ul>
                </div>
              )}
            </li>
            <div className="ebay-notification">
              <IoIosNotificationsOutline
                style={{ fontSize: "20px", color: "#000000" }}
                onMouseEnter={() => setShowNotification(true)}
                onMouseLeave={() => setShowNotification(false)}
              />
              {showNotification && (
                <div className="ebay-notification-drop">
                  <p>
                    Please <a href="#sign-in">sign-in</a> to view notifications.
                  </p>
                </div>
              )}
            </div>
            <div className="ebaycart">
              <IoCartOutline
                style={{ fontSize: "20px", color: "color: #000000" }}
                onMouseEnter={() => setShowCart(true)}
                onMouseLeave={() => setShowCart(false)}
              />
              {showCart && (
                <div className="ebaycart-drop">
                  <p>
                    Your cart is empty <br />
                    <br />
                    Time to start shopping!
                  </p>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
      <div className="EbayHead-container">
        <logo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="117"
            height="48"
            viewBox="0 0 122 48.592"
            id="gh-logo"
            aria-labelledby="ebayLogoTitle"
          >
            <title id="ebayLogoTitle">eBay Home</title>
            <g>
              <path
                fill="#F02D2D"
                d="M24.355 22.759c-.269-5.738-4.412-7.838-8.826-7.813-4.756.026-8.544 2.459-9.183 7.915zM6.234 26.93c.364 5.553 4.208 8.814 9.476 8.785 3.648-.021 6.885-1.524 7.952-4.763l6.306-.035c-1.187 6.568-8.151 8.834-14.145 8.866C4.911 39.844.043 33.865-.002 25.759c-.05-8.927 4.917-14.822 15.765-14.884 8.628-.048 14.978 4.433 15.033 14.291l.01 1.625z"
              ></path>
              <path
                fill="#0968F6"
                d="M46.544 35.429c5.688-.032 9.543-4.148 9.508-10.32s-3.947-10.246-9.622-10.214-9.543 4.148-9.509 10.32 3.974 10.245 9.623 10.214zM30.652.029l6.116-.034.085 15.369c2.978-3.588 7.1-4.65 11.167-4.674 6.817-.037 14.412 4.518 14.468 14.454.045 8.29-5.941 14.407-14.422 14.454-4.463.026-8.624-1.545-11.218-4.681a33.237 33.237 0 01-.19 3.731l-5.994.034c.09-1.915.185-4.364.174-6.322z"
              ></path>
              <path
                fill="#FFBD14"
                d="M77.282 25.724c-5.548.216-8.985 1.229-8.965 4.883.013 2.365 1.94 4.919 6.7 4.891 6.415-.035 9.826-3.556 9.794-9.289v-.637c-2.252.02-5.039.054-7.529.152zm13.683 7.506c.01 1.778.071 3.538.232 5.1l-5.688.032a33.381 33.381 0 01-.225-3.825c-3.052 3.8-6.708 4.909-11.783 4.938-7.532.042-11.585-3.915-11.611-8.518-.037-6.665 5.434-9.049 14.954-9.318 2.6-.072 5.529-.1 7.945-.116v-.637c-.026-4.463-2.9-6.285-7.854-6.257-3.68.021-6.368 1.561-6.653 4.2l-6.434.035c.645-6.566 7.53-8.269 13.595-8.3 7.263-.04 13.406 2.508 13.448 10.192z"
              ></path>
              <path
                fill="#92C821"
                d="M91.939 19.852l-4.5-8.362 7.154-.04 10.589 20.922 10.328-21.02 6.486-.048-18.707 37.251-6.85.039 5.382-10.348-9.887-18.393"
              ></path>
            </g>
          </svg>
        </logo>
        <p
          onClick={() => setShowCategories(!showCategories)}
          className="Ebay-shop-category"
        >
          Shop by
          <br />
          category <IoIosArrowDown />
          {showCategories && (
            <div className="ebay-shopcategory-drop">
              <div className="categories-container ">
                <div className="categories-grid">
                  {/* First Column - Motors */}
                  <div className="category-column">
                    <h3 className="category-title">Motors</h3>
                    <ul className="category-list">
                      <li>
                        <a href="#">Parts & accessories</a>
                      </li>
                      <li>
                        <a href="#">Cars & trucks</a>
                      </li>
                      <li>
                        <a href="#">Motorcycles</a>
                      </li>
                      <li>
                        <a href="#">Other vehicles</a>
                      </li>
                    </ul>
                  </div>
                  {/* Second Column - Electronics */}
                  <div className="category-column">
                    <h3 className="category-title">Electronics</h3>
                    <ul className="category-list">
                      <li>
                        <a href="#">Computers, Tablets & Network Hardware</a>
                      </li>
                      <li>
                        <a href="#">Cell Phones, Smart Watches & Accessories</a>
                      </li>
                      <li>
                        <a href="#">Video Games & Consoles</a>
                      </li>
                      <li>
                        <a href="#">Cameras & Photo</a>
                      </li>
                    </ul>
                  </div>
                  {/* Third Column - Collectibles & Art */}
                  <div className="category-column">
                    <h3 className="category-title">Collectibles & Art</h3>
                    <ul className="category-list">
                      <li>
                        <a href="#">Trading Cards</a>
                      </li>
                      <li>
                        <a href="#">Collectibles</a>
                      </li>
                      <li>
                        <a href="#">Coins & Paper Money</a>
                      </li>
                      <li>
                        <a href="#">Sports Memorabilia</a>
                      </li>
                    </ul>
                  </div>

                  {/* Fourth Column - Clothing & Accessories */}
                  <div className="category-column">
                    <h3 className="category-title">Clothing & Accessories</h3>
                    <ul className="category-list">
                      <li>
                        <a href="#">Women</a>
                      </li>
                      <li>
                        <a href="#">Men</a>
                      </li>
                      <li>
                        <a href="#">Handbags</a>
                      </li>
                      <li>
                        <a href="#">Collectible Sneakers</a>
                      </li>
                    </ul>
                  </div>

                  {/* Fifth Column - Business & Industrial */}
                  <div className="category-column">
                    <h3 className="category-title">Business & Industrial</h3>
                    <ul className="category-list">
                      <li>
                        <a href="#">Modular & Pre-Fabricated Buildings</a>
                      </li>
                      <li>
                        <a href="#">Test, Measurement & Inspection Equipment</a>
                      </li>
                      <li>
                        <a href="#">Heavy Equipment, Parts & Attachments</a>
                      </li>
                      <li>
                        <a href="#">Restaurant & Food Service</a>
                      </li>
                    </ul>
                  </div>

                  {/* Sixth Column - Home & garden */}
                  <div className="category-column">
                    <h3 className="category-title">Home & garden</h3>
                    <ul className="category-list">
                      <li>
                        <a href="#">Yard, Garden & Outdoor Living Items</a>
                      </li>
                      <li>
                        <a href="#">Tools & Workshop Equipment</a>
                      </li>
                      <li>
                        <a href="#">Home Improvement</a>
                      </li>
                      <li>
                        <a href="#">Kitchen, Dining & Bar Supplies</a>
                      </li>
                    </ul>
                  </div>

                  {/* Seventh Column - Sporting goods */}
                  <div className="category-column">
                    <h3 className="category-title">Sporting goods</h3>
                    <ul className="category-list">
                      <li>
                        <a href="#">Hunting Equipment</a>
                      </li>
                      <li>
                        <a href="#">Golf Equipment</a>
                      </li>
                      <li>
                        <a href="#">Outdoor sports</a>
                      </li>
                      <li>
                        <a href="#">Cycling Equipment</a>
                      </li>
                    </ul>
                  </div>

                  {/* Eighth Column - Jewelry & Watches */}
                  <div className="category-column">
                    <h3 className="category-title">Jewelry & Watches</h3>
                    <ul className="category-list">
                      <li>
                        <a href="#">Luxury Watches</a>
                      </li>
                      <li>
                        <a href="#">Wristwatches</a>
                      </li>
                      <li>
                        <a href="#">Fashion Jewelry</a>
                      </li>
                      <li>
                        <a href="#">Fine Jewelry</a>
                      </li>
                    </ul>
                  </div>

                  {/* Ninth Column - Other categories */}
                  <div className="category-column">
                    <h3 className="category-title">Other categories</h3>
                    <ul className="category-list">
                      <li>
                        <a href="#">Books, Movies & Music</a>
                      </li>
                      <li>
                        <a href="#">Toys & Hobbies</a>
                      </li>
                      <li>
                        <a href="#">Health & Beauty</a>
                      </li>
                      <li>
                        <a href="#">Baby Essentials</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Links */}
                <div className="bottom-links">
                  <div className="bottom-link-item">
                    <a href="#" className="bottom-link">
                      All Brands <span className="arrow">›</span>
                    </a>
                  </div>
                  <div className="bottom-link-item">
                    <a href="#" className="bottom-link">
                      All Categories <span className="arrow">›</span>
                    </a>
                  </div>
                  <div className="bottom-link-item">
                    <a href="#" className="bottom-link">
                      Seasonal Sales & Events <span className="arrow">›</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </p>
        <div className="search-holder">
          <IoMdSearch style={{ fontSize: "20px" }} />
          <input
            className="input-holder"
            placeholder="search for anything"
            type="text"
          />
          <p
            onClick={() => setAllCategories(!allcategories)}
            className="ebay-allcategories"
          >
            All Categories <IoIosArrowDown />
            {allcategories && (
              <div className="ebay-allcategories-drop">
                <ul className="ebay-allcategories-nav">
                  <li className={`li-category ${"li" ? "active" : ""}`}>
                    All Categories
                  </li>
                  <li>Antiques</li>
                  <li>Art</li>
                  <li>Baby</li>
                  <li>Books</li>
                  <li>• Business & Industrial</li>
                  <li>Cameras & Photo</li>
                  <li>Cell Phones & Accessories</li>
                  <li>Clothing, Shoes & Accessories</li>
                  <li>Coins & Paper Money</li>
                  <li>Collectibles</li>
                  <li>Computers/Tablets & Networking</li>
                  <li>Consumer Electronics</li>
                  <li>Crafts</li>
                  <li>Dolls & Bears</li>
                  <li>Movies & TV</li>
                  <li>eBay Motors</li>
                  <li>Entertainment Memorabilia</li>
                  <li>Gift Cards & Coupons</li>
                  <li>Health & Beauty</li>
                  <li>Home & Garden</li>
                  <li>Jewelry & Watches</li>
                  <li>Music</li>
                  <li>Musical Instruments & Gear</li>
                  <li>Pet Supplies</li>
                  <li>Pottery & Glass</li>
                  <li>Real Estate</li>
                  <li>Specialty Services</li>
                  <li>Sporting Goods</li>
                  <li>Sports Mem, Cards & Fan Shop</li>
                  <li>Stamps</li>
                  <li>Tickets & Experiences</li>
                  <li>Toys & Hoobies</li>
                  <li>Travel</li>
                  <li>Video Games & Consoles</li>
                  <li>Everything Else</li>
                </ul>
              </div>
            )}
          </p>
        </div>
        <button className="Ebay-header-button">Search</button>
        <span>
          <a href="#Advanced">Advanced</a>
        </span>
      </div>

      <div className="EbayHeaderlast-section">
        <ul className="EbayHeaderlast-section-nav">
          <li>
            {" "}
            <a href="#eBayLive">eBayLive</a>
          </li>
          <li>
            {" "}
            <a href="#Saved">Saved</a>
          </li>

          <li
            onMouseEnter={() => setShowElectronics(true)}
            onMouseLeave={() => setShowElectronics(false)}
            className="ebay-electronics"
          >
            {" "}
            <a href="#Electronics">Electronics</a>
            {showElectronics && (
              <div className="ebay-electronics-drop">
                <div className="content-holder">
                  <article className="content-write">
                    <h3>Most popular categories</h3>
                    <ul>
                      <li>
                        <a href="#Smartphones and accessories">
                          Smartphones and accessories
                        </a>
                      </li>
                      <li>
                        <a href="#">Video games and consoles</a>
                      </li>
                      <li>
                        <a href="#">Computers and tablets</a>
                      </li>
                      <li>
                        <a href="#">Cameras and photos</a>
                      </li>
                      <li>
                        <a href="#">Camers drones</a>
                      </li>
                      <li>
                        <a href="#">Returbished</a>
                      </li>
                      <li>
                        <a href="#">Bmart home</a>
                      </li>
                    </ul>
                  </article>
                  <aside className="content-write">
                    <h3>More categories</h3>
                    <ul>
                      <li>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <a href="#">Samsung</a>
                      </li>
                      <li>
                        <a href="#">Headphones & Portable audio</a>
                      </li>
                      <li>
                        <a href="#">Smart Watches</a>
                      </li>
                      <li>
                        <a href="#">Deals</a>
                      </li>
                      <li>
                        <a href="#">Sell on eBay</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="image-holder">
                    <img src="/Image/electronics.jpg" />
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setShowMotors(true)}
            onMouseLeave={() => setShowMotors(false)}
            className="ebay-electronics"
          >
            {" "}
            <a href="#motors">Motors</a>
            {showMotors && (
              <div className="ebay-electronics-drop">
                <div className="content-holder">
                  <article className="content-write">
                    <h3>Car</h3>
                    <ul>
                      <li>
                        <a href="#">Auto and truck parts</a>
                      </li>
                      <li>
                        <a href="#">Tools and supplies</a>
                      </li>
                      <li>
                        <a href="#">Turbo chargers</a>
                      </li>
                      <li>
                        <a href="#">Clothing and merchandiss</a>
                      </li>
                      <li>
                        <a href="#">Electronios and GP</a>
                      </li>
                      <li>
                        <a href="#">Air intake</a>
                      </li>
                    </ul>
                  </article>
                  <aside className="content-write">
                    <h3>Motorcycle and more</h3>
                    <ul>
                      <li>
                        <a href="#">Motoroyole parts</a>
                      </li>
                      <li>
                        <a href="#">Body and frameg</a>
                      </li>
                      <li>
                        <a href="#"></a>Engines and parts
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Rims</a>
                      </li>
                      <li>
                        <a href="#">Deals</a>
                      </li>
                      <li>
                        <a href="#">Sell on eBay</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="image-holder">
                    <img src="/Image/motors.jpg" />
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => setShowFashion(true)}
            onMouseLeave={() => setShowFashion(false)}
            className="ebay-electronics"
          >
            {" "}
            <a href="#Fashion">Fashion</a>
            {showFashion && (
              <div className="ebay-electronics-drop">
                <div className="content-holder">
                  <article className="content-write">
                    <h3>Most popular categories</h3>
                    <ul>
                      <li>
                        <a href="#">Footwear</a>
                      </li>
                      <li>
                        <a href="#">Women's clothing</a>
                      </li>
                      <li>
                        <a href="#">Footwear for women</a>
                      </li>
                      <li>
                        <a href="#">Men's clothing</a>
                      </li>
                      <li>
                        <a href="#">Watches</a>
                      </li>
                      <li>
                        <a href="#">Jewelry</a>
                      </li>
                    </ul>
                  </article>
                  <aside className="content-write">
                    <h3>More categories</h3>
                    <ul>
                      <li>
                        <a href="#">Accessories for mens</a>
                      </li>
                      <li>
                        <a href="#">Accessories for women</a>
                      </li>
                      <li>
                        <a href="#">Bags and wallets for women</a>
                      </li>
                      <li>
                        <a href="#">Mens sunglasses</a>
                      </li>
                      <li>
                        <a href="#">Womens sunglasess</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Deals</a>
                      </li>
                      <li>
                        <a href="#">Sell on eBay</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="image-holder">
                    <img src="/Image/fashion.jpg" />
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => setCollectibles(true)}
            onMouseLeave={() => setCollectibles(false)}
            className="ebay-electronics"
          >
            {" "}
            <a href="#Collectibles and Art">Collectibles and Art</a>
            {showCollectibles && (
              <div className="ebay-electronics-drop">
                <div className="content-holder">
                  <article className="content-write">
                    <h3>Most popular categories</h3>
                    <ul>
                      <li>
                        <a href="#">Collectibles</a>
                      </li>
                      <li>
                        <a href="#">Aetion figures</a>
                      </li>
                      <li>
                        <a href="#">Cartoon characters</a>
                      </li>
                      <li>
                        <a href="#">MoviE and TV charecters</a>
                      </li>
                      <li>
                        <a href="#">Diegast</a>
                      </li>
                      <li>
                        <a href="#">NuE cel memorebilie</a>
                      </li>
                    </ul>
                  </article>
                  <aside className="content-write">
                    <h3>More categories</h3>
                    <ul>
                      <li>
                        <a href="#">Sports memorabilia</a>
                      </li>
                      <li>
                        <a href="#">Trading card games</a>
                      </li>
                      <li>
                        <a href="#">Antiques</a>
                      </li>
                      <li>
                        <a href="#">Comics</a>
                      </li>
                      <li>
                        <a href="#">Funko pop</a>
                      </li>
                      <li>
                        <a href="#">Star Wars</a>
                      </li>
                      <li>
                        <a href="#">Leas</a>
                      </li>
                      <li>
                        <a href="#">Sell on eBay</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="image-holder">
                    <img src="/Image/collectibles.jpg" />
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => setShowSports(true)}
            onMouseLeave={() => setShowSports(false)}
            className="ebay-electronics"
          >
            {" "}
            <a href="#sports">Sports</a>
            {showSports && (
              <div className="ebay-electronics-drop">
                <div className="content-holder">
                  <article className="content-write">
                    <h3>Most popular categories</h3>
                    <ul>
                      <li>
                        <a href="#">Cycling</a>
                      </li>
                      <li>
                        <a href="#">Fitness, running and yoga</a>
                      </li>
                      <li>
                        <a href="#">Fitness tech</a>
                      </li>
                      <li>
                        <a href="#">rishing</a>
                      </li>
                      <li>
                        <a href="#">Camping</a>
                      </li>
                      <li>
                        <a href="#">Golf</a>
                      </li>
                      <li>
                        <a href="#">Team sport</a>
                      </li>
                    </ul>
                  </article>
                  <aside className="content-write">
                    <h3>More categories</h3>
                    <ul>
                      <li>
                        <a href="#">Watersports</a>
                      </li>
                      <li>
                        <a href="#">Winter sports</a>
                      </li>
                      <li>
                        <a href="#">Box and MMA</a>
                      </li>
                      <li>
                        <a href="#">NFL</a>
                      </li>
                      <li>
                        <a href="#">NBA</a>
                      </li>
                      <li>
                        <a href="#">MLB</a>
                      </li>
                      <li>
                        <a href="#">Deals</a>
                      </li>
                      <li>
                        <a href="#">Sell on eBay</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="image-holder">
                    <img src="/Image/sports.jpg" />
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setShowHealth(true)}
            onMouseLeave={() => setShowHealth(false)}
            className="ebay-electronics"
          >
            <a href="Health & Beauty">Health & Beauty</a>
            {showHealth && (
              <div className="ebay-electronics-drop">
                <div className="content-holder">
                  <article className="content-write">
                    <h3>Most popular categories</h3>
                    <ul>
                      <li>
                        <a href="#">Beauty</a>
                      </li>
                      <li>
                        <a href="#">Makeup</a>
                      </li>
                      <li>
                        <a href="#">Health</a>
                      </li>
                      <li>
                        <a href="#">K-Beauty</a>
                      </li>
                      <li>
                        <a href="#">Manicure and pedicure</a>
                      </li>
                      <li>
                        <a href="#">Hair products</a>
                      </li>
                      <li>
                        <a href="#">Skin products</a>
                      </li>
                      <li>
                        <a href="#">Orthopedic products</a>
                      </li>
                    </ul>
                  </article>
                  <aside className="content-write">
                    <h3>More categories</h3>
                    <ul>
                      <li>
                        <a href="#">Vitamins and food supplements</a>
                      </li>
                      <li>
                        <a href="#">Shaving and waxing</a>
                      </li>
                      <li>
                        <a href="#">Bath and personal hygiene</a>
                      </li>
                      <li>
                        <a href="#">Oral hygiene</a>
                      </li>
                      <li>
                        <a href="#">Massagers</a>
                      </li>
                      <li>
                        <a href="#">Sell on eBay</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="image-holder">
                    <img src="/Image/Health&beauty.jpg" />
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setShowIndustrial(true)}
            onMouseLeave={() => setShowIndustrial(false)}
            className="ebay-electronics"
          >
            {" "}
            <a href="#industrial equipment">Industrial equipment</a>
            {showIndustrial && (
              <div className="ebay-electronics-drop">
                <div className="content-holder">
                  <article className="content-write">
                    <h3>Most popular categories</h3>

                    <ul>
                      <li>
                        <a href="#">Dental healthcare</a>
                      </li>
                      <li>
                        <a href="#">electronic equipment and supplies</a>
                      </li>
                      <li>
                        <a href="#">Metallurgy and manufacturing</a>
                      </li>
                      <li>
                        <a href="#">Motors and industrial automation</a>
                      </li>
                      <li>
                        <a href="#">Heavy equipment parts</a>
                      </li>
                      <li>
                        <a href="#">Light industrial tools</a>
                      </li>
                      <li>
                        <a href="#">Inspection, measurement and testing</a>
                      </li>
                    </ul>
                  </article>
                  <aside className="content-write">
                    <h3>More categories</h3>
                    <ul>
                      <li>
                        <a href="#">Packing and shipping</a>
                      </li>
                      <li>
                        <a href="#">Office supplies and equipment</a>
                      </li>
                      <li>
                        <a href="#">Printing and graphic arts</a>
                      </li>
                      <li>
                        <a href="#">Restaurants and food service</a>
                      </li>
                      <li>
                        <a href="#">Maintenance and safety</a>
                      </li>
                      <li>
                        <a href="#">Retail and services</a>
                      </li>
                      <li>
                        <a href="#">Deals</a>
                      </li>
                      <li>
                        <a href="#">Sell on eBay</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="image-holder">
                    <img src="/Image/industrial.jpg" />
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setShowHome(true)}
            onMouseLeave={() => setShowHome(false)}
            className="ebay-electronics"
          >
            {" "}
            <a href="#Home & Garden">Home & Garden</a>
            {showHome && (
              <div className="ebay-electronics-drop">
                <div className="content-holder">
                  <article className="content-write">
                    <h3>Most popular categories</h3>
                    <ul>
                      <li>
                        <a href="#">Workshop tools and equipment</a>
                      </li>
                      <li>
                        <a href="#">Patio, garden and outdoors</a>
                      </li>
                      <li>
                        <a href="#">Home improvement</a>
                      </li>
                      <li>
                        <a href="#">kitchen, dining and bar</a>
                      </li>
                      <li>
                        <a href="#">Lamps, lights and fans</a>
                      </li>
                      <li>
                        <a href="#">interior decarator</a>
                      </li>
                      <li>
                        <a href="#">Home organisation</a>
                      </li>
                      <li>
                        <a href="#">Home appliances</a>
                      </li>
                    </ul>
                  </article>
                  <aside className="content-write">
                    <h3>More categories</h3>
                    <ul>
                      <li>
                        <a href="#">Toys</a>
                      </li>
                      <li>
                        <a href="#">Pets</a>
                      </li>
                      <li>
                        <a href="#">Craft</a>
                      </li>
                      <li>
                        <a href="#">Art supplies</a>
                      </li>
                      <li>
                        <a href="#">Musical instruments</a>
                      </li>
                      <li>
                        <a href="#">Jewelry and beads</a>
                      </li>
                      <li>
                        <a href="#">Deals</a>
                      </li>
                      <li>
                        <a href="#">Sell on eBay</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="image-holder">
                    <img src="/Image/Hom&garden.jpg" />
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            {" "}
            <a href="#Deals">Deals</a>
          </li>

          <li
            onMouseEnter={() => setShowSell(true)}
            onMouseLeave={() => setShowSell(false)}
            className="ebay-electronics"
          >
            <a href="#Sell">Sell</a>

            {showSell && (
              <div className="ebay-electronics-drop">
                <div className="content-holder">
                  <article className="content-write">
                    <h3>Most popular categories</h3>
                    <ul>
                      <li>
                        <a href="#">How to create a listing</a>
                      </li>
                      <li>
                        <a href="#">Join our growth program</a>
                      </li>
                      <li>
                        <a href="#">Seller center</a>
                      </li>
                      <li>
                        <a href="#">Seller updates</a>
                      </li>
                      <li>
                        <a href="#">Seller customer service</a>
                      </li>
                      <li>
                        <a href="#">eBay maneged payments</a>
                      </li>
                    </ul>
                  </article>
                  <aside className="content-write">
                    <h3>More categories</h3>
                    <ul>
                      <li>
                        <a href="#">Learn to sell</a>
                      </li>
                      <li>
                        <a href="#">eBay stores</a>
                      </li>
                      <li>
                        <a href="#">eBayfees</a>
                      </li>
                      <li>
                        <a href="#">Selling limits</a>
                      </li>
                    </ul>
                  </aside>
                  <div className="image-holder">
                    <img src="/Image/sell.jpg" />
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      <MobileHeader />
    </div>
  );
};

export default EbayHeader;
