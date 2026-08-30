// src/data/currency.js
export const currencyRates = {
  USD: { symbol: "$", rate: 1 },
  PHP: { symbol: "₱", rate: 58.50 } // 1 USD = 58.50 PHP (Example rate)
};

export const formatPrice = (price, currency) => {
  const { symbol, rate } = currencyRates[currency] || currencyRates.USD;
  return `${symbol}${(price * rate).toFixed(2)}`;
};