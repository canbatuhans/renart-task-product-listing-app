import React, { useState } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import StarRating from "../StarRating/StarRating";
import "./ProductCard.css";

const COLOR_LABELS = {
  yellow: "Yellow Gold",
  white: "White Gold",
  rose: "Rose Gold",
};
const COLOR_CODES = {
  yellow: "#E6CA97",
  white: "#D9D9D9",
  rose: "#E1A4A9",
};

function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState("yellow");

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.images[selectedColor]}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <div className="product-title">{product.name}</div>
        <div className="product-price">{product.priceFormatted}</div>
        <ColorPicker
          colors={["yellow", "white", "rose"]}
          selectedColor={selectedColor}
          onSelect={setSelectedColor}
        />
        <div className="product-color-label">{COLOR_LABELS[selectedColor]}</div>
        <div className="product-rating-row">
          <StarRating score={product.popularityScore * 5} />
          <span className="product-rating-score">
            {(product.popularityScore * 5).toFixed(1)}/5
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
