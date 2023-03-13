import React, { useState } from "react";
import "../styles.css";

const AddedList = () => {
  const [list, setList] = useState([
    { fruit: "Apple", id: 0, price: 2.5, currentState: "California" },
    { fruit: "Apple", id: 1, price: 3.5, currentState: "Massachusetts" }
  ]);
  const [fruit, setFruit] = useState("");
  const [id, setId] = useState(0);
  const [price, setPrice] = useState(0);
  const [currentState, setCurrentState] = useState("");

  const submitMyFruits = () => {
    setId(id + 1);
    let mySubmittedValues = {
      fruit: fruit,
      currentState: currentState,
      price: price,
      id: id
    };

    list.push(mySubmittedValues);
    setList(list);
    // mySubmittedValues = {fruit : '', currentState : '', price : 0; id : 0};
  };

  const myValues = list.map((e) => {
    return (
      <ul key={e.id} className="myList">
        <li>{e.fruit}</li>
        <li>{e.price}</li>
        <li>{e.currentState}</li>
      </ul>
    );
  });

  return (
    <>
      <div className="list">{myValues}</div>
      <div className="block">
        <label htmlFor="Fruit">Fruit</label>
        <br />
        <input
          type="text"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        <br />
        <label htmlFor="Fruit">Price</label>
        <br />
        <input
          type="text"
          value={currentState}
          onChange={(e) => setCurrentState(e.target.value)}
        />
        <br />
        <label htmlFor="Fruit">Current State</label>
        <br />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button type="button" onClick={submitMyFruits}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddedList;
