import {
  ROBOFRIENDS_REQUEST,
  ROBOFRIENDS_REQUEST_FAIL,
  ROBOFRIENDS_REQUEST_SUCCESS,
} from "../contstans/RobotsContasts";

export const roboFriendsReducer = (state = { robots: [] }, action) => {
  switch (action.type) {
    case ROBOFRIENDS_REQUEST:
      return Object.assign({}, state, { loading: true });
    case ROBOFRIENDS_REQUEST_SUCCESS:
      return Object.assign({}, state, { loading: false, robots: action.payload });
    case ROBOFRIENDS_REQUEST_FAIL:
      return Object.assign({}, state, { loading: false, error: action.payload });
    default:
      return state;
  }
};
