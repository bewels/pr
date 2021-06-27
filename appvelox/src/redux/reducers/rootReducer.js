import { combineReducers } from "redux";
import { userReducer } from "./userReduser";
import { registerReducer } from "./registerReduser";
import { doctorsReducer } from "./doctorsReducer";
import { recordsReducer } from "./recordsReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    regUser: registerReducer,
    doctors: doctorsReducer,
    records: recordsReducer
});