const axios = require("axios");

async function getGoldPrice() {
  try {
    const response = await axios.get(
      "https://api.metalpriceapi.com/v1/latest",
      {
        params: {
          api_key: "386532ce8444116f9b769b0d71b58200",
          base: "XAU",
          currencies: "USD",
        },
      }
    );
    const pricePerOunce = response.data.rates.USD;
    const pricePerGram = pricePerOunce / 31.1035;
    return pricePerGram;
  } catch (error) {
    console.error("Gold price fetch error:", error.message);
    return 75;
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
