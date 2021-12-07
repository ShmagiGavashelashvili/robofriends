import React from "react";
import { render } from "@testing-library/react";

import RoboFriendCard from "./RoboFriendCard";

describe("RoboFriendCard", () => {
  // let robot = {
  //   name: "shmagi",
  //   id: "1",
  //   username: "shmagi robo",
  //   email: "shmagi@gmail.com",
  //   random: 6,
  // };
  test("test component render", () => {
    render(<RoboFriendCard />);

    // const name = screen.getByRole("heading");
    // const email = screen.getByTestId("email");
    // const img = screen.getByRole("img");

    // expect(name).toBeInTheDocument();
    // expect(email).toBeInTheDocument();
    // expect(img).toBeInTheDocument();
    // expect(name).toHaveTextContent("shmagi");
    // expect(email).toHaveTextContent("shmagi@gmail.com");
    expect(render(<RoboFriendCard />)).toMatchSnapshot();
  });
});
