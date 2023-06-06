import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import './navigation.css';
import cart from '../../assets/bag.png';
// import {searchedAddress} from '../SplashPage/index'; 
import Cart from '../Cart/index'; 

const Navigation = ({ searchedAddress }) => {
    const user = useSelector((state) => state.user); 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const address = searchParams.get('address');
    const [isCartVisible, setIsCartVisible] = React.useState(false);

    const handleCartClick = () => {
        setIsCartVisible(!isCartVisible);
      };
  
    return (
        
        <nav className="navigation">
         <div className="logo">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
        </div>
      
          <div className="address">
            <span>{address}</span>
          </div>
        
          <div className="search-bar">
            <input type="text" placeholder="Search for Food!" />
          </div>
      
          <div className="user-actions">
            {user ? (
              <button>Sign Out</button>
            ) : (
            <Link to="/login" id="signup" className="button-link">Sign In</Link>   
            )}
            <img
                src={cart}
                className="cart-nav"
                alt="Shopping Cart"
                onClick={handleCartClick}
            />
            </div>
          {isCartVisible && <Cart />} 
        </nav>
      );
      
  };
  
  export default Navigation;
  