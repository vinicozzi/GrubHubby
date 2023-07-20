import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import './navigation.css';
import cart from '../../assets/bag.png';
import * as sessionActions from "../../store/session";
// import {searchedAddress} from '../SplashPage/index'; 
import Cart from '../Cart/index'; 
import SearchBar from '../SearchBar';

const Navigation = ({ searchedAddress }) => {
    const user = useSelector((state) => state.session.user); 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const address = searchParams.get('address');
    const [isCartVisible, setIsCartVisible] = React.useState(false);
    const dispatch = useDispatch()

    const handleCartClick = () => {
        setIsCartVisible(!isCartVisible);
      };
    
    const handleLogOut = () => {
        dispatch(sessionActions.logout())
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
            {/* <input type="text" placeholder="Search for Food!" /> */}
            <SearchBar/>
          </div>
      
          <div className="user-actions">
            {user ? (
              <button className="sign-out-mainnav" onClick={handleLogOut}>Sign Out</button>
            ) : (
            <Link to="/login" id="signup" className="nav-button-link">Sign In</Link>   
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
  