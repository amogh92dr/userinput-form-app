import React from "react";

import "./UserItem.css";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="user-item" onClick={deleteHandler}>
      {props.children}
      <p>{`${props.name} (${props.age} years old)`} </p>
    </li>
  );
};

export default UserItem;
