import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import yum from '../../assets/yum.jpeg';
import './SplashPage.css';
import MainNavigation from '../MainNavigation/navigation';
import Navigation from '../Navigation/index';

const SplashPage = () => {
  const [searchedAddress, setSearchedAddress] = useState("");
  const history = useHistory();

  const handleSearch = () => {
    if (searchedAddress) {
      history.push(`/restaurants?address=${encodeURIComponent(searchedAddress)}`);
    }
  };

  const handleChange = (event) => {
    const address = event.target.value;
    setSearchedAddress(address);
  };

  return (
    <>
    <section className="custom-section">
      <div className="custom-container">
        <div className="custom-row">
          <div className="custom-col custom-col-img">
            <img src={yum} alt="splash_photo" className="custom-img" />
          </div>
          <div className="custom-col custom-col-text">
            <div className="custom-content">
              {/* <Navigation searchedAddress={searchedAddress} /> */}
              <div className="custom-flex">
                <div className="custom-input-wrapper">
                  <h1 className="custom-heading" data-testid="hero-header">
                    Get food delivery and more
                  </h1>
                  <div className="custom-input-group">
                    <input
                      aria-label="Search Address"
                      type="search"
                      className="custom-input"
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="Enter street address or zip code"
                      required
                      name="searchTerm"
                      data-testid="address-input"
                      autoCapitalize="off"
                      autoCorrect="off"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="custom-button-group">
                    <svg className="custom-icon" aria-hidden="true">
                      <use xlinkHref="#compass" />
                    </svg>
                    <button
                      className="custom-button"
                      data-testid="start-order-search-btn"
                      tabIndex="0"
                      onClick={handleSearch}
                    >
                      Search Nearby
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  );
};

export default SplashPage;
