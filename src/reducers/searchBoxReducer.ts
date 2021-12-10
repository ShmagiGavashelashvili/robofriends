import { CHANGE_SEARCH_FIELD } from "../contstans/searchBoxConstants";

interface ActionType {
  type: string,
  payload: string
}

export const searchRobots = (state = { searchField: "" }, action : ActionType) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
