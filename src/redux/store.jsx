import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import businessReducer from "./business/business.reducer";

const rootReducer = combineReducers({
    business: businessReducer,
    
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;