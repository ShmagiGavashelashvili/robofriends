import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  test("render Search Box", () => {
    const onChange = jest.fn();
    render(<SearchBox onSearchChange={onChange} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "robofriends" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
