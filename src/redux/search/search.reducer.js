import { searchTypes } from "./search.types";
import { filterSearch } from "./search.utils";

const initialState = {
  search: [],
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.SEARCH_SUGGESTION:
      return {
        ...state,
        search: filterSearch(action.payload),
      };
    default:
      return state;
  }
};

export default searchReducer;
