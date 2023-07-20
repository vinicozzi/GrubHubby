import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurant } from '../../store/restaurants';
import { withRouter, Link } from 'react-router-dom'; 
import './SearchBar.css';

const SearchBar = () => {
  const restaurants = useSelector((state) => state.restaurants.allRestaurants);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [autocompleteResults, setAutocompleteResults] = useState([]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setAutocompleteResults(getAutocompleteResults(query));
  };

  const getAutocompleteResults = (query) => {
    if (!query) return [];
    return Object.values(restaurants).filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleAutocompleteSelect = (restaurant) => {
    setSearchQuery(''); 
    setAutocompleteResults([]);
    dispatch(fetchRestaurant(restaurant.id));
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for restaurants..."
          className="search-input"
        />
        <ul className="search-dropdown">
          {autocompleteResults.map((restaurant) => (
            <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
              <li onClick={() => handleAutocompleteSelect(restaurant)} className="search-item">
                {restaurant.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default withRouter(SearchBar);
