import RoboFriends from "./Components/RoboFriends";
import React, { memo } from "react";

function App(): JSX.Element {
  return (
    <div className="App">
      <RoboFriends />
    </div>
  );
}

export default memo(App);
