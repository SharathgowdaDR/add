import React, { useState } from 'react';
import ExpensesItem from './components/ExpensesItems';
import ExpensesForm from './components/ExpensesForm';
import ExpensesFilter from './components/ExpensesFilter'; 
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = selectedYear
    ? expenses.filter((expense) => expense.date.getFullYear().toString() === selectedYear)
    : expenses;

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpensesForm onAddExpense={addExpenseHandler} />
      <ExpensesFilter onFilterChange={filterChangeHandler} selectedYear={selectedYear} />
      <div className="expense-container">
        {filteredExpenses.map((expense, index) => (
          <ExpensesItem
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
