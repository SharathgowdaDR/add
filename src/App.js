import React, { useState } from 'react';
import ExpenseItem from './components/ExpensesItems';
import ExpenseForm from './components/ExpensesForm';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <div className="expense-container">
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
