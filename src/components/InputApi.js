import { useEffect, useState } from "react";

const InputApi = () => {
  const [name, setName] = useState("");

  const onChange = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setName(data);
      });
  };

  return (
    <>
      <input type="text" name="name" value={name} onChange={onChange} />
    </>
  );
};

export default InputApi;
