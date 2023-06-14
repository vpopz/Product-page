import React from "react";

const RateAndPrice = ({ price, rating }) => {
  const ratingString = `${rating.rate} (${rating.count} reviews)`;
  return (
    <div className="rateAndPrice">
      <p>Rating: {ratingString}</p>
      <h5>Price: {price}</h5>
    </div>
  );
};

export default RateAndPrice;
