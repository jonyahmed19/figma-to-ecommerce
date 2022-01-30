import { combineReducers } from "redux";
import loadProductsReducer from "./directory/loadproducts.reducer";
import cartProductReducer from "./cart/cart.reducer";
const rootReducer = combineReducers({
  products: loadProductsReducer,

  cartItems: cartProductReducer,
});

export default rootReducer;
