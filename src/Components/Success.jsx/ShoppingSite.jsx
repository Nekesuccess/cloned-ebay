
import React from "react";
import Carousel from "./Carousel";
import "./ShoppingSite.css"

const ShoppingSite = () => {

  const categories = [
    {
      name: "New electronics",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/da0AAeSwXetoXrC2/$_57.JPG",
      hasCheckmark: false,
    },
    {
      name: "Collectibles",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/o1cAAeSwJZFoXrC2/$_57.JPG ",
      hasCheckmark: false,
    },
    {
      name: "Parts & accessories",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/2jcAAeSwgEdoXrC2/$_57.JPG",
      hasCheckmark: false,
    },
    {
      name: "Fashion",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/e~QAAeSwOUJoXrC2/$_57.JPG",
      hasCheckmark: false,
    },
    {
      name: "Health & beauty",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/gdMAAeSw7H9oXrC2/$_57.JPG",
      hasCheckmark: false,
    },
    {
      name: "Home & garden",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/9rUAAeSwftdoXrC2/$_57.JPG",
      hasCheckmark: false,
    },
    {
      name: "Refurbished",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/C04AAeSwA6JoXrC3/$_57.JPG",
     
    },
  ];

  const rareFinds = [
    {
      name: "Sports memorabilia",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/SFcAAeSwxEtoZTv7/$_57.JPG",
    },
    {
      name: "Sports trading cards",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/kyEAAeSw-19oZTwr/$_57.JPG",
    },
    {
      name: "Collectible card games",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/yNUAAeSw9pJoZTwS/$_57.JPG",
    },
    {
      name: "Funko",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/oegAAeSwNhNoZTwh/$_57.JPG",
    },
    {
      name: "Comics",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/kyEAAeSw-19oZTwr/$_57.JPG",
    },
    {
      name: "Action figures",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/KKoAAeSwX0xoZTw2/$_57.JPG",
    },
    {
      name: "Antiques",
      image:
        "https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/JFUAAeSw21hoZTxE/$_57.JPG",
    },
  ];

  const handleCategoryClick = (categoryName) => {
    console.log(`User clicked on: ${categoryName}`);
  };

  return (
    <div className="main-container">
      <Carousel />

      <section className="hero-section">
        <div className="hero-text">
          <h1>Shopping made easy</h1>
          <p>Enjoy reliability, secure deliveries and hassle-free returns.</p>
        </div>
        <button className="hero-button">Start now</button>
      </section>

  
      <section className="categories-section">
        <h2>Browse by categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                {category.hasCheckmark && (
                  <div className="green-checkmark">✓</div>
                )}
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      
      <section className="rare-finds-section">
        <h2>Discover rare finds</h2>
        <div className="categories-grid">
          {rareFinds.map((item, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => handleCategoryClick(item.name)}
            >
              <div className="category-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="category-image"
                />
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShoppingSite;