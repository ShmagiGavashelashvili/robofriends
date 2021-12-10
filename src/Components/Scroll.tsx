import React from "react";

type Props = {
  children?: JSX.Element
}

function Scroll({ children }: Props) {
  return (
    <div style={{ overflowY: "scroll", border: "1px solid black", height: "500px" }}>
      {children}
    </div>
  );
}

export default Scroll;
