import { useState } from "react";

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);

  const [myName, setMyName] = useState("Mukesh");

  const counterIncrese = () => {
    setCounter(counter + 1);
  };

  const counterDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const onNameChange = (e) => {
    setMyName(e.target.value);
    e.preventDefault();
  };

  return (
    <div className="use-state">
      <fieldset>
        <legend style={{ color: "red" }}>Use State Hook</legend>

        <p> If i click on ++ i will increase, and -- decrease</p>

        <button onClick={counterDecrease}>-----</button>
        {counter}
        <button onClick={counterIncrese}>++++</button>
        <br />
        <br />
        <p> You can change the input value</p>
        <input type="text" value={myName} onChange={(e) => onNameChange(e)} />
        {myName}
      </fieldset>
      <br />
      <br />
    </div>
  );
};

export default UseStateExample;
