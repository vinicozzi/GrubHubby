import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReview } from '../../store/reviews';
import './review.css'

const ReviewComponent = ({ restaurantId }) => {
  const reviews = useSelector(state => state.reviews[restaurantId]);
  const dispatch = useDispatch();
  const [newReview, setNewReview] = useState('');

  const handleAddReview = () => {
    if (newReview.trim() !== '') {
      dispatch(addReview(restaurantId, newReview));
      setNewReview('');
    }
  };

  return (
    <div className="review-component">
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      )}
      <div className="review-form">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write a review..."
        />
        <button onClick={handleAddReview}>Submit</button>
      </div>
    </div>
  );
};

export default ReviewComponent;
