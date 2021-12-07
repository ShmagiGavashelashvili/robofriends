import { CHANGE_SEARCH_FIELD } from "../contstans/searchBoxConstants";
import { searchBoxAction } from "./searchBoxAction";

describe("search box action", () => {
  const text = "searchField";
  const expected = {
    payload: text,
    type: CHANGE_SEARCH_FIELD,
  };
  test("test for search action", () => {
    expect(searchBoxAction(text)).toEqual(expected);
  });
});
