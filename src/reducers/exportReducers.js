import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import mixtapeReducer from "./mixtapesReducer";
import musicReducer from "./musicReducer";

export default combineReducers({
  globalReducer,
  mixtapeReducer,
  musicReducer,
});
