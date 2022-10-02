import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productListReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const store = configureStore({
  reducer,
  initialState,
});

export default store;
