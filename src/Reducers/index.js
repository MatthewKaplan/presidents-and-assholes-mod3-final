import { combineReducers } from "redux";
import presidentsReducer from "./presidentsReducer";


export const rootReducer = combineReducers({
  presidents: presidentsReducer
});

export default rootReducer;