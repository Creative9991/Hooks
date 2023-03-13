import React from "react";
import HOC from "./HOC";
const UserList = ({ data }) => {
  let renderedData = data.map((users) => {
    return (
      <div key={users.id}>
        <p>
          <strong>{users.name}</strong>
        </p>
      </div>
    );
  });

  return <div>{renderedData}</div>;
};

// New const for search user
// it is a new component which wil be return from HOC
const SearchUsers = HOC(UserList, "users");

export default SearchUsers;
