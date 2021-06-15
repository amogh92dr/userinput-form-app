import React, { useState } from "react";
import UserInputList from "./components/Users/UserList/UserList";
import UserInput from "./components/Users/UserInput/UserInput";
import "./App.css";

const App = () => {
  const [UserItem, setUserInput] = useState([]);

  const addUserHandler = (enteredName, enteredAge) => {
    setUserInput((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        id: Math.ceil(Math.random() * 1000),
        name: enteredName,
        age: enteredAge,
      });
      return updatedUsers;
    });
  };

  const deleteItemHandler = (userId) => {
    setUserInput((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No Users found. Maybe add one?</p>
  );

  if (UserInput.length > 0) {
    content = (
      <UserInputList items={UserItem} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="input-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="info">{content}</section>
    </div>
  );
};

export default App;
