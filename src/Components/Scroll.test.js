import React from "react";
import { render } from "@testing-library/react";

import Scroll from "./Scroll";

describe("Scroll", () => {
  test("scroll component snapshot", () => {
    render(<Scroll />);

    expect(render(<Scroll />)).toMatchSnapshot();
  });
});
