import { combineReducers } from "redux";
import { featureReducer } from "./Features/features.reducer";

export const reducers = combineReducers({
    features:featureReducer
});



export default reducers;