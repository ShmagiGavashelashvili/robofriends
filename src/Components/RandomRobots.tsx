import React from "react";

interface FuncProp {
  randomRobots(): void
}

const RandomRobots = ({ randomRobots }: FuncProp) => {
  return (
    <div>
      <button onClick={randomRobots}>Click To Get Random Robots</button>
    </div>
  );
};

export default RandomRobots;
