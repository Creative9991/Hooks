import React from "react";

const JsClass = () => {
  // Class based structure

  let Person = class {
    constructor(firstname, height) {
      (this.firstname = firstname), (this.height = height);
    }
  };

  console.log(Person.name);

  return <></>;
};

export default JsClass;
