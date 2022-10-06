import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found!</h2>
  }

  if (props.items.length > 0) {
    return props.items.map((e) => (
      <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
    ));
  }

  return <ul className="expenses-list">

  </ul>;
};

export default ExpensesList;
