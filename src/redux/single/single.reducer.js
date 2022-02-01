import singleTypes from "./single.types";

const initialState = {
  isLoading: false,
  single: [],
  error: "",
};

const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case singleTypes.SINGLE_LOAD_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case singleTypes.SINGLE_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        single: action.payload,
      };

    case singleTypes.SINGLE_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default singleReducer;
