import { LoadTypes } from "./loadproducts.types";

const initialState = {
  products: [],
  isLoading: false,
  errorMessage: null,
};

const loadProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoadTypes.REQUEST_START:
      return {
        ...state,
        isLoading: true,
        products: [],
        errorMessage: null,
      };
    case LoadTypes.REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case LoadTypes.REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        products: [],
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default loadProductsReducer;
