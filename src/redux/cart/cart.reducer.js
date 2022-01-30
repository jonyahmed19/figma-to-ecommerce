import { removeFromCart } from "./cart.actions";
import { cartTypes } from "./cart.types";
import { addItemCount, removeCart, updateQuantity } from "./cart.utils";

const initialState = {
  cartItems: [],
  updated: [],
};
const cartProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemCount(state.cartItems, action.payload),
      };
    case cartTypes.DELETE_CART:
      return {
        ...state,
        cartItems: removeCart(state.cartItems, action.payload),
      };
    case cartTypes.UPDATE_CART:
      return {
        ...state,
        cartItems: updateQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartProductReducer;
