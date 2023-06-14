import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const RatingStarIcon = ({ rating, color }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <FontAwesomeIcon icon={fasStar} key={i} style={{ color: color }} />
      ); 
    } else {
      stars.push(
        <FontAwesomeIcon icon={farStar} key={i} style={{ color: color }} />
      ); 
    }
  }
  return <div className="RatingStarIcon">{stars}</div>;
};

export default RatingStarIcon;
