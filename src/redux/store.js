import { createStore, applyMiddleware } from "redux";
import { save, load } from "redux-localstorage-simple";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];

/**********Localstore save and retriving codes */

const createStoreWithMiddleware = applyMiddleware(
  ...middleware,
  save({
    state: ["cartItems"],
  })
)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  load({
    state: ["cartItems"],
  })
);

export default store;
