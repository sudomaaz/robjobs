import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import jobReducer from "./reducers/jobs";
import { userRegReducer, userLoginReducer } from "./reducers/users";

const reducer = combineReducers({
  jobReducer,
  userRegReducer,
  userLoginReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
