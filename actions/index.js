import uuid from "uuid/v1";

export const actionTypes = {
  DATA_LOAD_SUCCESS: "DATA_LOAD_SUCCESS",

  SAVE_MY_DATA: "SAVE_MY_DATA"
};

export const saveMyData = data => {
  const id = uuid();
  return {type: actionTypes.SAVE_MY_DATA, payload: {[id]: data}};
};

export const loadSuccess = () => {
  return {type: actionTypes.DATA_LOAD_SUCCESS};
};