import React from "react";

import UserItem from "../UserItem/UserItem";
import "./UserList.css";

const CourseGoalList = (props) => {
  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          onDelete={props.onDeleteItem}
        />
      ))}
    </ul>
  );
};

export default CourseGoalList;
