import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { jobReducer, applyReducer, jobAddReducer } from "./reducers/jobs";
import { userReducer, userJobReducer } from "./reducers/users";

const reducer = combineReducers({
  jobReducer,
  applyReducer,
  userReducer,
  userJobReducer,
  jobAddReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
