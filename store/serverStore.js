import { createStore } from 'redux';
import reducers from "../reducers/index";

export default (initialState, {isServer}) => {
  return createStore(reducers, initialState);
}