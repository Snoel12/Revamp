import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import { quoteReducer } from "./quotes";
import { goalsReducer } from "./goals";
import { foodReducer } from "./nutrition";

const reducer = combineReducers({
  auth,
  quotes: quoteReducer,
  goals: goalsReducer,
  foods: foodReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
