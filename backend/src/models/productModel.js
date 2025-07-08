const fs = require("fs");
const path = require("path");

function getAllProducts() {
  const productsPath = path.join(__dirname, "../data/products.json");
  const productsData = fs.readFileSync(productsPath, "utf-8");
  return JSON.parse(productsData);
}

module.exports = { getAllProducts };
