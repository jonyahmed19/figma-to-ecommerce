import { searchTypes } from "./search.types";

export const searchSuggestion = (text) => ({
  type: searchTypes.SEARCH_SUGGESTION,
  payload: text,
});
