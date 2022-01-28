import axios from "axios";
import {
  productsLoadStarts,
  productsLOadSuccess,
  productsError,
} from "./loadproducts.actions";

export const loadProductsAsync = () => (dispatch) => {
  dispatch(productsLoadStarts());
  axios
    .get("https://fakestoreapi.com/products")
    .then((data) => dispatch(productsLOadSuccess(data)))
    .catch((error) => dispatch(productsError(error)));
};
