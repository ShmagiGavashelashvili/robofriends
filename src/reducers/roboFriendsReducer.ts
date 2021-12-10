import {
  ROBOFRIENDS_REQUEST,
  ROBOFRIENDS_REQUEST_FAIL,
  ROBOFRIENDS_REQUEST_SUCCESS,
} from "../contstans/RobotsContasts";

interface Te {
  id: number;
  name: string;
  username: string,
  email: string
};

interface ActionType {
  type: string,
  payload: Array<Te> | string
}


export const roboFriendsReducer = (state = { robots: [] }, action : ActionType) => {
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
