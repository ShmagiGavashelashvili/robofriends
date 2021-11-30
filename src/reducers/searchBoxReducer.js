import { CHANGE_SEARCH_FIELD } from "../contstans/searchBoxConstants";

export const searchRobots = (state = { searchField: "" }, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
