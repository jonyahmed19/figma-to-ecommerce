import {
  singleLoadSuccess,
  singleLoadError,
  singleLoadStarts,
} from "./single.actions";
import axios from "axios";

export const singleFetch = (productId) => (dispatch) => {
  dispatch(singleLoadStarts());
  axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then(({ data }) => dispatch(singleLoadSuccess(data)))
    .catch((error) => dispatch(singleLoadError(error)));
};
