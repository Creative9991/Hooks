import { useContext } from "react";
import { AppContext } from "../App";

const Login = () => {
  const { setUsername } = useContext(AppContext);

  return (
    <>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </>
  );
};

export default Login;
