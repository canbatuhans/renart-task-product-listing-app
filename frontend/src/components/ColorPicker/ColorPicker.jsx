import React from "react";
import "./ColorPicker.css";

const COLOR_CODES = {
  yellow: "#E6CA97",
  white: "#D9D9D9",
  rose: "#E1A4A9",
};

function ColorPicker({ colors, selectedColor, onSelect }) {
  return (
    <div className="color-picker-row">
      {colors.map((color) => (
        <button
          key={color}
          className={`color-dot${selectedColor === color ? " selected" : ""}`}
          style={{ color: COLOR_CODES[color] }}
          onClick={() => onSelect(color)}
          aria-label={color}
        >
          <span className="color-dot-inner" />
        </button>
      ))}
    </div>
  );
}

export default ColorPicker;
