import {actionTypes} from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SAVE_MY_DATA:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};