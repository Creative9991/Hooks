import { useState, createContext, useEffect, useCallback } from "react";
import "./styles.css";
import UseReducerHook from "../src/components/UseReducer";
import UseRefExample from "../src/components/UseRef";
import UseEffectTutorial from "./components/UseEffect";
import UseMemoExample from "./components/UseMemo";
import UseCallBackExample from "./components/UseCallback";
import Html5Example from "./components/Html5";
import UseStateExample from "./components/UseState";
import Login from "./components/Login";
import User from "./components/User";
import PostCall from "./components/PostCall";
import InputApi from "./components/InputApi";
import Javascript from "./components/javascript";
import JsClass from "./components/JsClass";
import useLayoutEffectHook from "./components/UseLayoutEffect";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import SearchUsers from "./components/UserList";
import SearchTodos from "./components/TodoList";
import ClassBased from "./components/ClassBased";
import AddedList from "./components/AddedList";
import CustomeHook from "./components/CustomHook";

export const AppContext = createContext(null);

function App() {
  //https://jsonplaceholder.typicode.com/posts

  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333"
  };

  const myFetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        title: { firstName },
        body: { password },
        userId: 1
      })
    });
  };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const youSubmittedMe = (e) => {
    e.preventDefault();
    myFetchPost();
  };

  const myUsernameChange = (e) => {
    setFirstName(e.target.value);
    e.preventDefault();
  };

  const myPasswordChange = (e) => {
    setPassword(e.target.value);
    e.preventDefault();
  };

  return (
    <div className="App">
      <ClassBased />
      <UseEffectTutorial />
      <form onSubmit={(e) => youSubmittedMe(e)}>
        <label>Enter Username</label>
        <br />
        <input
          type="text"
          name="username"
          value={firstName}
          onChange={(e) => {
            myUsernameChange(e);
          }}
        />{" "}
        <br />
        <br />
        <label>Enter Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            myPasswordChange(e);
          }}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>-------------------------------------------------------------------</p>
      <UseStateExample />
      <UseReducerHook />
      <UseRefExample />
      <UseMemoExample />

      <UseStateExample />
      <Html5Example />
      <fieldset>
        <legend style={{ color: "red" }}>Use Context example</legend>
        <AppContext.Provider value={{ username, setUsername }}>
          <Login />
          <User />
        </AppContext.Provider>
      </fieldset>
      <div style={theme}>
        <fieldset>
          <legend>This is the UseCallback example</legend>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <button onClick={() => setDark((prevDark) => !prevDark)}>
            Toggle Theme
          </button>
          <UseCallBackExample exampleUseCallback={getItems} />
        </fieldset>
      </div>
      <fieldset>
      <legend>This is the Post call example</legend>
      <PostCall />
      </fieldset>

      <InputApi />
      <Javascript />
      <JsClass />
      <useLayoutEffectHook />
      <SearchUsers />
      <SearchTodos />
      <AddedList />
      <fieldset>
        <legend style={{ color: "red" }}>Custome Hook</legend>
        <CustomeHook initialCount={10} />
      </fieldset>
    </div>
  );
}

export default App;
