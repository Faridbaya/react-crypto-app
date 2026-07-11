const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-qtmmARyDmoSPLq1EkicgUNyv";

const getCoinList = () => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&%27x-cg-demo-api-key:${API_KEY}`;
};

export { getCoinList };
