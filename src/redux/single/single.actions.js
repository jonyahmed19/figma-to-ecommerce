import singleTypes from "./single.types";
export const singleLoadStarts = () => ({
  type: singleTypes.SINGLE_LOAD_PENDING,
});
export const singleLoadSuccess = (data) => ({
  type: singleTypes.SINGLE_LOAD_SUCCESS,
  payload: data,
});

export const singleLoadError = (error) => ({
  type: singleTypes.SINGLE_LOAD_ERROR,
  payload: error,
});
