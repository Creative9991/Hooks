import React, { useEffect, useLayoutEffect } from "react";

const useLayoutEffectHook = () => {
  useLayoutEffect(() => {
    console.log("Hey I will be loaded before useEffect");
  }, []);

  useEffect(() => {
    console.log("Hey I will loaded after the useLayoutEffect");
  }, []);

  return (
    <>
      <h1>Hello this is useLayoutEffectHook</h1>
    </>
  );
};

export default useLayoutEffectHook;
