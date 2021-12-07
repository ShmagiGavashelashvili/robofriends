import {
  ROBOFRIENDS_REQUEST,
  ROBOFRIENDS_REQUEST_FAIL,
  ROBOFRIENDS_REQUEST_SUCCESS,
} from "../contstans/RobotsContasts";

import { roboFriendsReducer } from "./roboFriendsReducer";

describe("roboFriends reducer request", () => {
  const initialState = {
    robots: [],
  };
  test("should return inital; state", () => {
    expect(roboFriendsReducer(undefined, {})).toEqual(initialState);
  });

  test("should request ROBOFRIENDS_REQUEST", () => {
    expect(
      roboFriendsReducer(initialState, {
        type: ROBOFRIENDS_REQUEST,
        payload: {
          robots: [],
          loading: true,
        },
      })
    ).toEqual({
      robots: [],
      loading: true,
    });
  });

  test("should request ROBOFRIENDS_REQUEST_SUCCESS and fill state", () => {
    expect(
      roboFriendsReducer(initialState, {
        type: ROBOFRIENDS_REQUEST_SUCCESS,
        payload: [
          {
            id: "12",
            name: "test",
            email: "test@gmail.com",
          },
        ],
      })
    ).toEqual({
      loading: false,
      robots: [
        {
          id: "12",
          name: "test",
          email: "test@gmail.com",
        },
      ],
    });
  });

  test("should ROBOFRIENDS_REQUEST_FAIL", () => {
    expect(
      roboFriendsReducer(initialState, {
        type: ROBOFRIENDS_REQUEST_FAIL,
        payload: "error message",
      })
    ).toEqual({
      loading: false,
      robots: [],
      error: "error message",
    });
  });
});
