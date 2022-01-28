import { LoadTypes } from "./loadproducts.types";

export const productsLoadStarts = () => ({
  type: LoadTypes.REQUEST_START,
});

export const productsLOadSuccess = (products) => ({
  type: LoadTypes.REQUEST_SUCCESS,
  payload: products,
});

export const productsError = (error) => ({
  type: LoadTypes.REQUEST_ERROR,
  payload: error,
});
