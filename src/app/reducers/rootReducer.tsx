import { combineReducers } from "redux";
import masterReducers from "./mastersReducers";
import Candidates from "./Candidates";
import InterviewReducer from "./Interviews";
import authReducer from "./Auth";

export const rootReducer = combineReducers({
  ...masterReducers,
  ...Candidates,
  ...InterviewReducer,
  ...authReducer,
});
