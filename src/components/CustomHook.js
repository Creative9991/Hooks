import React from "react";
import UseCounter from "./UseCounter";

const CustomeHook = ({ initialCount }) => {
  const { count, increment } = UseCounter(initialCount);
  return (
    <>
      <h1>Custom Hook Example</h1>
      <h2>Count : {count}</h2>
      <button onClick={increment}>INCREATE</button>
    </>
  );
};

export default CustomeHook;
