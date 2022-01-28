import { combineReducers } from "redux";
import loadProductsReducer from "./directory/loadproducts.reducer";

const rootReducer = combineReducers({ products: loadProductsReducer });

export default rootReducer;
