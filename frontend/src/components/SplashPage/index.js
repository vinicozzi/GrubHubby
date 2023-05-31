import React from "react";
import { Link } from "react-router-dom";
import yum from '../../assets/yum.jpeg';
import './SplashPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navigation from '../Navigation';


const SplashPage = () => {
  const handleSearch = (event) => {
    // Handle search functionality
  };

  return (
    <section className="vh-100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 px-0 d-none d-sm-block">
         
          <img src={yum}
            alt="splash_photo" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
         
        </div>
        <div className="col-sm-6 text-black">
          <div className="px-5 ms-xl-4">
          </div>
          <Navigation />
          <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <div style={{ width: '23rem' }}>
            <h1 className="supermassive-heading u-stack-y-0" data-testid="hero-header">Get food delivery and more</h1>
              <div className="form-outline mb-4">
                <input
                    aria-label="Search Address"
                    type="search"
                    className="addressInput-textInput s-form-control input-overflow u-line address-input--fullscreenAutocomplete"
                    autoComplete="off"
                    spellCheck="false"
                    placeholder="Enter street address or zip code"
                    required
                    name="searchTerm"
                    data-testid="address-input"
                    autoCapitalize="off"
                    autoCorrect="off"
                    role="combobox"
                    aria-expanded="false"
                    aria-autocomplete="both"/>
              </div>
              <div className="pt-1 mb-4">
              <svg className="cb-icon cb-icon-svg cb-icon--sm" aria-hidden="true">
              <use xlinkHref="#compass" />
              </svg>
              <button className="s-btn s-btn-primary s-btn--block addressInput-submitBtn s-btn--large" data-testid="start-order-search-btn" tabIndex="0">Search Nearby</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
};

export default SplashPage;
