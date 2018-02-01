import {actionTypes} from "../actions";

export default (state = {loaded: false}, action) => {
  switch (action.type) {
    case actionTypes.DATA_LOAD_SUCCESS:
      return {loaded: true};

    default:
      return state;
  }
}