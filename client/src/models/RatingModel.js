import api from "../api.js";

export async function addRatingToProduct({ productId, rating }) {
    const result = await api.post(`/products/${productId}`, { rating });
    if (result.status === 200) {
      return "string";
    } else {
      console.log(result.status);
      console.log(result.data);
      return {};
    }
  }