import { createStore } from 'redux';
import appReducer from "./reducer";

let initialState = {
  nightMode: true,
  plannerList: []
};

export const store = createStore(
  appReducer, initialState)