import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import yum from '../../assets/yum.jpeg';
import './SplashPage.css';
import Navigation from '../Navigation/index';
import * as sessionActions from "../../store/session";

const SplashPage = () => {
  const [searchedAddress, setSearchedAddress] = useState("");
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchedAddress) {
      history.push(`/restaurants?address=${encodeURIComponent(searchedAddress)}`);
    }
  };

  const handleChange = (event) => {
    const address = event.target.value;
    setSearchedAddress(address);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

    
  const handleLogOut = () => {
    dispatch(sessionActions.logout())
};


  return (
    <>
      <section className="splash-section">
        <div className="splash-container">
          <div className="splash-row">
            <img src={yum} alt="splash_photo" className="splash-image" />
          </div>
          <div className="splash-mid">
            <div className="search-form">
              <h1 className="splash-desc">Get Food Delivery and More!</h1>
              <div className="splash-form">
                <input
                  type="text"
                  className="address-form"
                  placeholder="Enter street address or zip code"
                  value={searchedAddress}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <button className="search-splash-button" onClick={handleSearch}>
                  Search Nearby
                </button>
              </div>
              <div className="login-link">
                {user ? (
                  <button className="sign-out-mainnav" onClick={handleLogOut}>Sign Out</button>
                ) : ( 
                  <Link to="/login">Sign in</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navigation searchedAddress={searchedAddress} />
    </>
  );
};

export default SplashPage;
