import {combineReducers} from "redux";
import myDataReducer from "./myDataReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  myData: myDataReducer,
  status: statusReducer
});