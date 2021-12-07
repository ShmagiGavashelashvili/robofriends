import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import RandomRobots from "./RandomRobots";

describe("RandomRobots", () => {
  test("rendering random,Robots Component", () => {
    render(<RandomRobots />);

    expect(render(<RandomRobots />)).toMatchSnapshot();
  });

  test("check fro click event", () => {
    render(<RandomRobots />);
    const button = screen.getByRole("button");
    expect(fireEvent.click(button));
  });
});
