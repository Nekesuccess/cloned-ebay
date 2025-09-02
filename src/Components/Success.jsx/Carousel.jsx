
import  { useState, useEffect } from 'react';
import "./Carousel.css"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const slides = [
    {
      id: 1,
      title: "Endless accessories. Epic prices.",
      subtitle: "Browse millions of upgrades for your ride.",
      buttonText: "Shop now",
      type: "automotive",
      products: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=200&h=200&fit=crop&crop=center"
      ]
    },
    {
      id: 2,
      title: "Top tech for your ride",
      subtitle: "Explore in-car entertainment, GPS, security devices, and more.",
      buttonText: "Shop now",
      type: "tech",
      categories: [
        { name: "Entertainment", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop&crop=center" },
        { name: "GPS", image: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=200&h=200&fit=crop&crop=center" },
        { name: "Security devices", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&crop=center" }
      ]
    },
    {
      id: 3,
      title: "Build an elite collection",
      subtitle: "Choose your next adventure from thousands of finds.",
      buttonText: "Start your journey",
      type: "collection",
      categories: [
        { name: "Lego", image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=200&h=200&fit=crop&crop=center" },
        { name: "Coins", image: "https://images.unsplash.com/photo-1594736797933-d0b22d3a46ca?w=200&h=200&fit=crop&crop=center" },
        { name: "Comic books", image: "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?w=200&h=200&fit=crop&crop=center" }
      ]
    },
    {
      id: 4,
      title: "Get help exactly when you need it",
      subtitle: "From shipping to returns, find answers to all of your questions.",
      buttonText: "Start here",
      type: "support"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide(current => (current + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(current => current === 0 ? slides.length - 1 : current - 1);
  };

  const jumpToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderProducts = (products) => {
    return products.map((imageUrl, index) => (
      <div key={index} className="product-card">
        <img src={imageUrl} alt={`Product ${index + 1}`} />
      </div>
    ));
  };

  const renderCategories = (categories) => {
    return categories.map((category, index) => (
      <div key={index} className="category-item">
        <div className="category-image">
          <img src={category.image} alt={category.name} />
        </div>
        <h4>{category.name} ›</h4>
      </div>
    ));
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div 
          className="slides-track" 
          style={{ transform:` translateX(-${currentSlide * 100}%) `}}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className={`slide slide-${slide.type}`}>
              <div className="slide-content">
                
                {/* Left side - Text content */}
                <div className="text-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.subtitle}</p>
                  <button className="action-button">{slide.buttonText}</button>
                </div>

              
                <div className="visual-content">
                  {slide.products && renderProducts(slide.products)}
                  {slide.categories && renderCategories(slide.categories)}
                </div>

              </div>
            </div>
          ))}
        </div>

    
        <div className="nav-buttons">
          <button className="nav-btn" onClick={goToPrevSlide}>‹</button>
          <button className="nav-btn" onClick={goToNextSlide}>›</button>
              <button className="nav-btn pause-btn" onClick={() => {}}>‖</button>
        </div>

      
        <div className="dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => jumpToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;