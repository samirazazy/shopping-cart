import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  itemListReducer,
  itemDetailsReducer,
} from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
});

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhacer(applyMiddleware(thunk))
);

export default store;
