import React, { useState, useRef } from 'react';
import "./carousel.css"
import rightarrow from '../../assets/right.png'
import leftarrow from '../../assets/left.png'


const CategoriesCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [scrollPosition, setScrollPosition] = useState(0);


  const categories = [
    { id: 'national-picks', name: 'National Picks', image: 'national-picks-illustration-v5.svg' },
    { id: 'bagels', name: 'Bagels', image: 'bagels-illustration-v5.svg' },
    { id: 'pizza', name: 'Pizza', image: 'pizza-illustration-v5.svg' },
    { id: 'coffee-and-tea', name: 'Coffee and Tea', image: 'coffee-and-tea-illustration-v5.svg' },
    { id: 'chicken', name: 'Chicken', image: 'chicken-illustration-v5.svg' },
    { id: 'asian', name: 'Asian', image: 'asian-illustration-v5.svg' },
    { id: 'italian', name: 'Italian', image: 'italian-illustration-v5.svg' },
    { id: 'american', name: 'American', image: 'american-illustration-v5.svg' },
    { id: 'mexican', name: 'Mexican', image: 'mexican-illustration-v5.svg' },
    { id: 'hamburgers', name: 'Hamburgers', image: 'hamburgers-illustration-v5.svg' },
    { id: 'healthy', name: 'Healthy', image: 'healthy-illustration-v5.svg' },
    { id: 'sushi', name: 'Sushi', image: 'sushi-illustration-v5.svg' },
    { id: 'fast-food', name: 'Fast Food', image: 'fast-food-illustration-v5.svg' },
    { id: 'dessert', name: 'Dessert', image: 'dessert-illustration-v5.svg' },
    { id: 'pasta', name: 'Pasta', image: 'pasta-illustration-v5.svg' },
    { id: 'breakfast', name: 'Breakfast', image: 'breakfast-illustration-v5.svg' },
    { id: 'tacos', name: 'Tacos', image: 'tacos-illustration-v5.svg' },
    { id: 'salads', name: 'Salads', image: 'salads-illustration-v5.svg' },
    { id: 'wings', name: 'Wings', image: 'wings-illustration-v5.svg' },
    { id: 'soup', name: 'Soup', image: 'soup-illustration-v5.svg' },
    { id: 'noodles', name: 'Noodles', image: 'noodles-illustration-v5.svg' },
    { id: 'burrito', name: 'Burritos', image: 'burritos-illustration-v5.svg' },
    { id: 'ice-cream', name: 'Ice Cream', image: 'ice-cream-illustration-v5.svg' },
    { id: 'seafood', name: 'Seafood', image: 'seafood-illustration-v5.svg' },
    { id: 'deli', name: 'Deli', image: 'deli-illustration-v5.svg' },
    { id: 'steak', name: 'Steak', image: 'steak-illustration-v5.svg' },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id);
    // Perform filtering logic or other actions based on the selected category
  };

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Adjust the scroll distance as needed
        behavior: "smooth", // Add smooth scrolling effect
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: "smooth", // Add smooth scrolling effect
      });
    }
  };

  return (
    <div>
    <img className="arrow arrow-left" src={leftarrow} onClick={scrollLeft} ></img>
    <div className="categories-carousel">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`category ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          <div className="cuisineRibbon-cuisine">
            <div className="u-stack-y-3 cuisineRibbon-cuisine-illustration-container">
              <img
                className="name-image"
                src={`https://media-cdn.grubhub.com/d_search:browse-images:fallback1-illustration-v5.svg/w_80,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_svg,h_80/search/browse-images/${category.image}`}
                alt={category.name}
              />
            </div>
            <div>
              <div className="caption">
                {category.name}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <img className="arrow arrow-right" src={rightarrow} onClick={scrollRight} ></img>
    </div>
  );
};

export default CategoriesCarousel;
