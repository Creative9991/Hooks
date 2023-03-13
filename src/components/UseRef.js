//useRef returns a mutable ref object whose .
//current property is initialized to the passed
// argument (initialValue). The returned object will
//persist for the full lifetime of the component.

import { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus();
    //inputRef.current.value = "";
    console.log(inputRef.current.value);
  };

  return (
    <div className="ref-example">
      <fieldset>
        <legend style={{ color: "red" }}>useRef Hook</legend>
        <p>When we click on the button the input text will be focused</p>
        <p>Some times we need clear the input that we entered</p>
        <h1>Input Focus</h1>
        <input type="text" ref={inputRef} />
        <button onClick={onClick}>Sumbit</button>
      </fieldset>
      <br />
      <br />
    </div>
  );
};

export default UseRefExample;
