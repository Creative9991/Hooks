import { useReducer } from "react";

///// UseReducer is used when we have a multiple actions with
//one event trigger then useReducer is the right option

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return false;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div className="use-reducer">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click here
      </button>
      <h2> {state.showText && <p>This is a text</p>}</h2>
    </div>
  );
};

export default UseReducerHook;
