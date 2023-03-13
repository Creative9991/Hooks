import { useState, useEffect } from "react";

const UseCallBackExample = ({ exampleUseCallback }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(exampleUseCallback());
  }, [exampleUseCallback]);

  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

export default UseCallBackExample;
