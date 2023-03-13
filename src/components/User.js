import { useContext } from "react";

import { AppContext } from "../App";

const User = () => {
  const { username } = useContext(AppContext);
  return (
    <>
      <h1> Profile </h1>
      <h1> Username : {username}</h1>
    </>
  );
};
export default User;
