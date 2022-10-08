import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  // useRef
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  console.log(nameInputRef.current.value);

  const addUserHandler = (event) => {
    event.preventDefault();
    // Will execute only if enter is valid
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return; 
    }
    if (+enteredAge < 1) {
      return;
    }
    // console.log(enteredUsername, enteredAge);
    // Calling method through props in App.js
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername(''); 
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} ref={nameInputRef}></input>
        <label htmlFor="age">Age(Year)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
