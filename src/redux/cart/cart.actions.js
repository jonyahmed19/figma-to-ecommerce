import { cartTypes } from "./cart.types";

export const addToCart = (product) => ({
  type: cartTypes.ADD_TO_CART,
  payload: product,
});
export const removeFromCart = (id) => ({
  type: cartTypes.DELETE_CART,
  payload: id,
});
export const updateCartQuantity = (data) => ({
  type: cartTypes.UPDATE_CART,
  payload: data,
});
