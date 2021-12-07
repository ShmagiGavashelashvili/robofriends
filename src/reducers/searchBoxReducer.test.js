import { CHANGE_SEARCH_FIELD } from "../contstans/searchBoxConstants";
import { searchRobots } from "./searchBoxReducer";

describe("searchBoxReducer", () => {
  const initialState = {
    searchField: "",
  };
  test("should return initial state", () => {
    expect(searchRobots(undefined, {})).toEqual(initialState);
  });

  test("should handle Chnage_Search_Field Event", () => {
    expect(
      searchRobots(initialState, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});
