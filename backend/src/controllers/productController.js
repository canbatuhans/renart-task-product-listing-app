const { getAllProducts } = require("../models/productModel");
const { getGoldPrice, calculateProductPrice } = require("../utils/priceUtils");

async function getProducts(req, res) {
  try {
    const products = getAllProducts();
    const goldPrice = await getGoldPrice();
    const productsWithPrice = products.map((product) =>
      calculateProductPrice(product, goldPrice)
    );

    // Filtreleme
    let filteredProducts = productsWithPrice;
    const { minPrice, maxPrice, minPopularity, maxPopularity } = req.query;
    if (minPrice) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price >= Number(minPrice)
      );
    }
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price <= Number(maxPrice)
      );
    }
    if (minPopularity) {
      filteredProducts = filteredProducts.filter(
        (p) => Number(p.popularityScore5) >= Number(minPopularity)
      );
    }
    if (maxPopularity) {
      filteredProducts = filteredProducts.filter(
        (p) => Number(p.popularityScore5) <= Number(maxPopularity)
      );
    }

    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
}

module.exports = { getProducts };
