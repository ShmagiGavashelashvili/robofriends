import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { roboFriendsReducer} from '../reducers/roboFriendsReducer'
import { searchRobots } from "../reducers/searchBoxReducer";

const reducers = combineReducers({
  searchField: searchRobots,
  robotsData: roboFriendsReducer,
});

const middleware = [thunk];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
