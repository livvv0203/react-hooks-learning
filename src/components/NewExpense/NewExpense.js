import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // this function is expecting to get a param from child component <ExpenseForm>
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // Submitted by the user, in ExpenseForm
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData); // Data received with newly assigned key-id
    props.onAddExpense(expenseData); // Pass the function as a value
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {/* The function will be triggered when something happened inside of the Component */}
      {/* Use the function inside of ExpenseForm */}
    </div>
  );
};

export default NewExpense;
