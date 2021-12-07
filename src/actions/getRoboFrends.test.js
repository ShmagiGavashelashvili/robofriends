import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  ROBOFRIENDS_REQUEST,
  ROBOFRIENDS_REQUEST_SUCCESS,
  ROBOFRIENDS_REQUEST_FAIL,
} from "../contstans/RobotsContasts";
import { fetchRoboFriends } from "./getRoboFrends";
import { mockStore } from "../setupTests";
const store = mockStore();
const mock = new MockAdapter(axios);

describe("fetchRoboFriends", () => {
  beforeEach(() => {
    store.clearActions();
  });
  test("handles request robots", () => {
    store.dispatch(fetchRoboFriends());
    const action = store.getActions()[0];
    const expectedAction = {
      type: ROBOFRIENDS_REQUEST,
    };
    expect(action).toEqual(expectedAction);
  });

  test("robofriends async request success", () => {
    mock.onGet("https://jsonplaceholder.typicode.com/users").reply(200, [
      {
        id: "12",
        name: "test",
        email: "test@gmail.com",
      },
    ]);

    store.dispatch(fetchRoboFriends()).then(() => {
      let expectedActions = {
        type: ROBOFRIENDS_REQUEST_SUCCESS,
        payload: [
          {
            id: "12",
            name: "test",
            email: "test@gmail.com",
          },
        ],
      };
      expect(store.getActions()[1]).toEqual(expectedActions);
    });
  });

  test("robofriends async request fail", () => {
    mock.onGet("https://jsonplaceholder.typicode.com/users").reply(400, {
      error: "Request failed with status code 400",
    });

    store.dispatch(fetchRoboFriends()).then(() => {
      let expectedActions = {
        type: ROBOFRIENDS_REQUEST_FAIL,
        payload: "Request failed with status code 400",
      };
      expect(store.getActions()[1]).toEqual(expectedActions);
    });
  });
});
