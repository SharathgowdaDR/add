import React, { useState } from 'react';
import ExpensesItems from './components/ExpensesItems';
import './App.css';

function App() {
  const expenses = [
    {
      title: 'Food',
      amount: 10,
      location: 'Restaurant',
      date: new Date(2021, 5, 12),
    },
    {
      title: 'Petrol',
      amount: 100,
      location: 'Gas Station',
      date: new Date(2021, 5, 12),
    },
    {
      title: 'Movie',
      amount: 200,
      location: 'Cinema',
      date: new Date(2021, 5, 12),
    },
    {
      title: 'Groceries',
      amount: 50,
      location: 'Supermarket',
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList, setExpenseList] = useState(expenses);

  const clickHandler = (index) => {
    const updatedExpenses = [...expenseList];
    updatedExpenses[index].amount = 100;
    setExpenseList(updatedExpenses);
  };

  const expenseItems = expenseList.map((expense, index) => (
    <div className="expense-item" key={index}>
      <span>{expense.date.toISOString().split('T')[0]}</span>
      <h2>{expense.title}</h2>
      <span className="amount">RS {expense.amount}</span>
      <span className="location">{expense.location}</span>
      <button onClick={() => clickHandler(index)}>Change Amount</button>
    </div>
  ));

  return (
    <div className="expense-container">
      {expenseItems}
    </div>
  );
}

export default App;
