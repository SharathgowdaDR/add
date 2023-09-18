import React from 'react';
import ExpensesDate from './ExpensesDate';

function ExpensesItem(props) {
  return (
    <div className="expense-item">
      <ExpensesDate date={props.date} />
      <h2>{props.title}</h2>
      <span className="amount">RS {props.amount}</span>
      <span className="location">{props.location}</span>
      <button onClick={props.onClick}>Change Amount</button>
    </div>
  );
}

export default ExpensesItem;