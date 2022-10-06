import React, { useState } from 'react';
import './ExpenseForm.css';

// User will be entering: Title, Date, Amount
// Gathering user inputs: get the value and store it somewhere
const ExpenseForm = (props) => {
  // Initially an empty string, will always be a string even if input is a number
  // Here, we have multiple states, but all related to <form>
  // Thus, making an one state object
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // // Good Practice - receive prev state snapshot for the state updating
    // setUserInput((prevState) => {
    //     // return the new state snapshot
    //     // Why? React schedules state updates - to making sure having the latest state snapshot
    //     // Keeping all scheduled state updates in mind
    //     return { ...prevState, enteredTitle: event.target.value };
    // });

    // copy the existing values and overwrite enteredTitle
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // }); // This is not a good practice though
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    // built into default JS behavior, nothing react specific
    // Hence, the request will not be sent, page will not be reloaded
    event.preventDefault();

    console.log("On Submit Form: " + enteredDate);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // Parse the entered date String to an Object
    };
    console.log(expenseData); // data obj
    // Here, we are calling a function in parent component - NewExpense
    // param: expenseData will be received in New expense
    props.onSaveExpenseData(expenseData);
    // use value attribute in <input> to conduct a two-way binding
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    // When any submit action is triggered, refresh on page will be triggered as well
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          {/* Step: Incremental values that are valid */}
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* Date collected as a string */}
          <input
            type="date"
            min="2019-01-01"
            max="2022-10-03"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      {/* Form will be submitted  */}
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
