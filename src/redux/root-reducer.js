import { combineReducers } from "redux";
import loadProductsReducer from "./directory/loadproducts.reducer";
import cartProductReducer from "./cart/cart.reducer";
import searchReducer from "./search/search.reducer";
import singleReducer from "./single/single.reducer";
const rootReducer = combineReducers({
  products: loadProductsReducer,
  cartItems: cartProductReducer,
  search: searchReducer,
  single: singleReducer,
});

export default rootReducer;
