import React from 'react';
import './ExpenseForm.css';

// User will be enter: Title, Date, Amount
const ExpenseForm = () => {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    {/* Step: Incremental values that are valid */}
                    <input type='number' min="0.01" step="0.01"></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-10-03"></input>
                </div>
            </div>
            {/* Form will be submitted  */}
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;