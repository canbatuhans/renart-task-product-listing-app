const axios = require("axios");

async function getGoldPrice() {
  try {
    const response = await axios.get("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token":
          process.env.GOLD_API_KEY || "goldapi-1jlsbk17mctwayex-io",
        "Content-Type": "application/json",
      },
    });
    // Doğrudan 1 gram 24 ayar altın fiyatı (USD)
    return response.data.price_gram_24k;
  } catch (error) {
    console.error(
      "Gold price fetch error:",
      error.message,
      error.response?.data
    );
    return 75; // fallback
  }
}

function calculateProductPrice(product, goldPrice) {
  const price = (
    (product.popularityScore + 1) *
    product.weight *
    goldPrice
  ).toFixed(2);
  return {
    ...product,
    price: parseFloat(price),
    priceFormatted: `$${price} USD`,
    popularityScore5: (product.popularityScore * 5).toFixed(1),
  };
}

module.exports = { getGoldPrice, calculateProductPrice };
