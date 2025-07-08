import React from "react";
import "./StarRating.css";

function StarRating({ score }) {
  const fullStars = Math.floor(score);
  const halfStar = score - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <span className="star-rating">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <span key={i} className="star full">
            ★
          </span>
        ))}
      {halfStar && <span className="star half">★</span>}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <span key={i} className="star empty">
            ★
          </span>
        ))}
    </span>
  );
}

export default StarRating;
