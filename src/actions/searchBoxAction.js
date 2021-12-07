import { CHANGE_SEARCH_FIELD } from "../contstans/searchBoxConstants";

export const searchBoxAction = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};
