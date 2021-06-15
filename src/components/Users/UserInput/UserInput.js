import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./UserInput.module.css";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
const UserInput = (props) => {
  const [enteredValue, setEnteredValue] = useState({
    username: {
      value: "",
      isValid: true,
    },
    age: {
      value: "",
      isValid: true,
    },
  });

  const nameInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setEnteredValue((prevUsers) => {
        const updatedUsers = { ...prevUsers };
        updatedUsers.username.value = event.target.value.trim();
        updatedUsers.username.isValid = true;
        return updatedUsers;
      });
    }
  };
  const ageInputChangeHandler = (event) => {
    let val = event.target.value;
    if (val.trim().length > 0 && parseInt(val.trim()) > 0) {
      setEnteredValue((prevUsers) => {
        const updatedUsers = { ...prevUsers };
        updatedUsers.age.value = val.trim();
        updatedUsers.age.isValid = true;
        return updatedUsers;
      });
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.username.value.trim() === "") {
      setEnteredValue((prevUsers) => {
        const updatedUsers = { ...prevUsers };
        updatedUsers.username.isValid = false;
        return updatedUsers;
      });
    }
    if (enteredValue.age.value.trim() === "") {
      setEnteredValue((prevUsers) => {
        const updatedUsers = { ...prevUsers };
        updatedUsers.age.isValid = false;
        return updatedUsers;
      });
    }
    props.onAddUser(enteredValue.username.value, enteredValue.age.value);
    setEnteredValue({
      username: {
        value: "",
        isValid: true,
      },
      age: {
        value: "",
        isValid: true,
      },
    });
  };

  return (
    <div>
      {!(enteredValue.username.isValid || enteredValue.age.isValid) && (
        <ErrorModal title="An Error Occured" message="Something Went wrong" />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label>User Input Form</label>
            <input
              className={
                (enteredValue.username.isValid && styles.invalid) || ""
              }
              type="text"
              placeholder="User Name"
              value={enteredValue.username.value}
              onChange={nameInputChangeHandler}
            />
            <input
              className={(!enteredValue.age.isValid && styles.invalid) || ""}
              type="number"
              placeholder="Age"
              value={enteredValue.age.value}
              onChange={ageInputChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
