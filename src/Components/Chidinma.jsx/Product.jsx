import React from "react";
import "./Product.css";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ebayDeals = [
  
  {
    id: 1,
    title: "Dyson Airwrap™ Multi-Styler Complete Long | Refurbished",
    price: "$339.99",
    originalPrice: "$599.99",
    image: "https://i.ebayimg.com/images/g/JZ4AAeSw7h1osIR6/s-l500.webp",
  },
  {
    id: 2,
    title: "Milwaukee 2737-20 M18 FUEL D-Handle Jig Saw Bare Tool Certifie...",
    price: "$112.99",
    image: "https://i.ebayimg.com/images/g/dfgAAeSwb95osIS4/s-l500.webp",
  },
  {
    id: 3,
    title: "Dremel VS High Performance Rotary Tool Kit 4000-DR Certifie...",
    price: " $51.99",
    originalPrice: " $74.99",
    image: "https://i.ebayimg.com/images/g/fUIAAeSwJW9n7sfM/s-l500.webp",
  },
  {
    id: 4,
    title: "Samsung Galaxy S22+ SM-S906U Unlocked 128GB Phantom Black...",
    price: "$180.31",
    originalPrice: "$799.99",
    image: "https://i.ebayimg.com/images/g/hQkAAeSwOC1osIUR/s-l500.webp",
  },
  {
    id: 5,
    title: "Nintendo Switch V2 Gray Joy Cons 32GB Gaming Console + 2DAY...",
    price: "$233.33",
    originalPrice: "$299.99",
    image: "https://i.ebayimg.com/images/g/EiYAAeSwowhosIWF/s-l500.webp",
  },
  {
    id: 6,
    title: 'Lenovo Thinkpad T14 14" i7-10610U 512GB SSD 16GB',
    price: "$270.00",
    originalPrice: "$899.99",
    image: "https://i.ebayimg.com/images/g/hwYAAeSwowFosIW1/s-l500.webp",
  },
  {
    id: 7,
    title: "Panasonic Z85 Series 55 inch OLED 4K Ultra HD Smart Fire TV ",
    price: "$677.00",
    originalPrice: "$1,599.99",
    image: "https://i.ebayimg.com/images/g/imUAAOSwn0Zh~PK0/s-l500.webp",
  },
  {
    id: 8,
    title: "https://i.ebayimg.com/images/g/JrQAAeSwCuBosIYH/s-l500.webp",
    price: "$739.99",
    image: "./pics8.png",
  },
];

const Products = () => {
  return (
    <div className="mainContainer">
      <div className="imageContainar">
        <div className="icon">
          <IoIosArrowBack />
        </div>
        <div className="icon2">
          <IoIosArrowForward />
        </div>
        <div className="imageWithText">
          <article className="wrapper">
            <h1>Today's Deals</h1>
            <span>All With Free Shipping</span>
            <button>Shop now</button>
          </article>
        </div>

        <div className="myProductscontainer">
          {ebayDeals.map((product) => (
            <article key={product.id} className="imageWithText2">
              <div className="iconContainer">
                <FaRegHeart />
              </div>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <div className="prices">
                <p className="amount">{product.price}</p>
                <p className="formerPrice">{product.originalPrice}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="con">
        <div className="pics">
          <div className="image">
            <div className="text_with_button">
              <article className="text">
                <span className="span1">There's a deal for you, too</span>
                <span className="span2">
                  Don't miss a chance to save on items you've been looking for.
                </span>
                <button className="btn">Explore now </button>
              </article>
            </div>
          </div>
        </div>
        <div className="pics2">
          <div className="image2">
            <div className="left_side">
              <article className="text">
                <span className="spanp">Endless accessories. Epic prices.</span>
                <span className="span2">
                  Browse millions of upgrades for your ride.
                </span>
                <button className="btn">Explore now </button>
              </article>
            </div>
            <div className="right_side">
              <img
                src="https://i.ebayimg.com/images/g/3MkAAOSwwHVoLdPk/s-l960.webp"
                alt=""
                className="pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;