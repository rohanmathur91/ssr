// import "./style.css";
import React from "react";

export const App = ({ users }) => {
  return (
    <div>
      <h1>welcome back 😎</h1>
      <ul>
        {users.length > 0 && users.map(({ id, name }) => <li>{name}</li>)}
      </ul>
    </div>
  );
};
