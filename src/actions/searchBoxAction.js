import { CHANGE_SEARCH_FIELD } from "../contstans/searchBoxConstants";

export const searchBoxAction = (text) => (dispatch) => {
  dispatch({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  });
};
