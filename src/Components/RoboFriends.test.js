import React from "react";
import { render } from "../setupTests";
import RoboFriends from "./RoboFriends";

let wrapper;
beforeEach(() => {
  wrapper = render(<RoboFriends />);
});

describe("RoboFriends", () => {
  test("roboFriends Render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
