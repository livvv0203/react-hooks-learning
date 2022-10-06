import React, { useState } from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Printing Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  }, 
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 9, 20),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 7, 18),
  },
  {
    id: 'e5',
    title: 'New Desk',
    amount: 300,
    date: new Date(2022, 10, 18),
  },
  {
    id: 'e6',
    title: 'New Desk (Wooden)',
    amount: 100,
    date: new Date(2022, 5, 18),
  },
  {
    id: 'e7',
    title: 'New Desk (Wooden)',
    amount: 200,
    date: new Date(2022, 3, 18),
  },
  {
    id: 'e8',
    title: 'New Food',
    amount: 150,
    date: new Date(2021, 8, 18),
  },
  {
    id: 'e9',
    title: 'New Food',
    amount: 85,
    date: new Date(2021, 6, 18),
  },
  {
    id: 'e10',
    title: 'New Something',
    amount: 35,
    date: new Date(2020, 11, 18),
  },
];

function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // Receive obj containing user inputs from child component NewExpenses
  // Flow: ExpenseForm -> NewExpense -> App
  const addExpenseHandler = (expense) => {
    // Based on an older snapshot of prev state
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log(expense); // Could be added to the expenses array later on
    // setExpenses(expense, ...expenses);
  };

  return (
    <div>
      {/* Function Pointer */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense expenses={expenses}></Expense>
    </div>
  );
}

export default App;
