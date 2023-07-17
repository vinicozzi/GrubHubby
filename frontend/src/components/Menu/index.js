import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../MainNavigation/navigation';
import { openModal, closeModal } from '../../store/menuItemModal';
import { addToCart } from '../../store/cart';
import star from '../../assets/star.png';
import './menu.css';
import RestaurantInfo from '../Info/index';
// import ReviewComponent from '../Review/index';
import Footer from '../Footer/index';
import { fetchRestaurants, fetchRestaurant } from '../../store/restaurants';


const MenuComponent = () => {
  const { id: restaurantId } = useParams();
  const dispatch = useDispatch();
  const restaurant = useSelector(state => state.restaurants.currentRestaurant);
  const menuItems = useSelector(state => state.menuItems);
  const showModal = useSelector((state) => state.modal.showModal);
  const selectedMenuItem = useSelector((state) => state.modal.selectedMenuItem);
  const [showInfo, setShowInfo] = useState(false);
  const allRestaurants = useSelector(state => state.restaurants.allRestaurants);


  // const [showReviews, setShowReviews] = useState(false);
  const handleOpenModal = (menuItem) => {
    dispatch(openModal(menuItem));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(closeModal());
  };

  const handleAboutClick = () => {
    setShowInfo(!showInfo);
  };

  // const handleToggleReviews = () => {
  //   setShowReviews(!showReviews);
  // };  

  useEffect(() => {
    dispatch(fetchRestaurant(restaurantId));
  }, [dispatch, restaurantId]);

  // useEffect(() => {
  //   dispatch(fetchRestaurants());
  // }, [dispatch]);

  const otherRestaurants = Object.values(allRestaurants).filter(
    rest => rest.id !== restaurantId
  );

  
  if (!restaurant || !menuItems) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="restaurant-header">
          <img src={restaurant.photo} className="restaurant-image" alt="Restaurant" />
          <div className="restaurant-details">
            <h1 className="restaurant-name">{restaurant.name}</h1>
            <p className="restaurant-location">{restaurant.address}</p>
            <div className='rating-info'>
            <img src={star} alt="Star Rating" className="star"/> 
            <p className="rating-stars"> {restaurant.rating}</p>
            <p className="rating-count">({restaurant.reviewCount} Ratings)</p>
          </div>
        </div>
      </div>
        
        <div className="tab-container">
            <div className="tabs">
              {/* <div className={`tab ${showInfo ? 'active' : ''}`} onClick={handleAboutClick}>Info</div>
              {showInfo &&  */}
              {<RestaurantInfo
                  address={restaurant.address}
                  hours={restaurant.hours}
                  priceRange={restaurant.priceRating}
                  phoneNumber={restaurant.phoneNumber}
                  categories={restaurant.categories} 
                  description={restaurant.description}
               />}
              {/* <div className={`tab ${showReviews ? 'active' : ''}`} onClick={handleToggleReviews}>Reviews</div>
              {showReviews && <ReviewComponent restaurantId={restaurantId} />} */}
            </div>
          <div className="search-bar-rest">
            <input type="text" placeholder="Search menu items"/>
            <button>Search</button>
          </div>
        </div>
        <div className="menu-container">
          {Object.values(menuItems).map((menuItem) => (
            <div className="menu-item" key={menuItem.id} onClick={() => handleOpenModal(menuItem)}>
              <div className="menu-item-left">
                <div className="menu-item-name">
                  <h4>{menuItem.itemName}</h4>
                </div>
                <div className="menu-item-description">
                  <p>{menuItem.description}</p>
                </div>
              </div>
              <div className="menu-item-right">
                <div className="menu-item-image">
                  <img src={menuItem.photo} alt="Menu Item" />
                </div>
                <div className="menu-item-price" >
                  <p>${menuItem.itemPrice}+</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer restaurants={otherRestaurants} />
      {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                <span className="close-text">Close</span>
                <span className="close-icon">&times;</span>
              </span>
              <h2>{selectedMenuItem.itemName}</h2>
              <p>{selectedMenuItem.description}</p>
              <div className="modal-image-container">
                <img src={selectedMenuItem.photo} className="modal-image" alt="Menu Item" />
              </div>
              <p>{selectedMenuItem.itemPrice}</p>
              <button onClick={() => handleAddToCart(selectedMenuItem)}>Add to Cart</button>
            </div>
          </div>
      )}
    </>
  );
};

export default MenuComponent;
