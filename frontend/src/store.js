import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { blogsReducer, blogDetailsReducer } from "./reducers/blogReducers";
import { authReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  auth: authReducer,
  blogs: blogsReducer,
  blogDetails: blogDetailsReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
