import React, { useState } from 'react';
import ExpensesItem from './components/ExpensesItem';
import ExpensesForm from './components/ExpensesForm';
import ExpensesFilter from './components/ExpensesFilter';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [isExpenseFormVisible, setIsExpenseFormVisible] = useState(false);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    setIsExpenseFormVisible(false); 
  };

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const toggleExpenseForm = () => {
    setIsExpenseFormVisible(!isExpenseFormVisible);
  };

  const filteredExpenses = selectedYear
    ? expenses.filter((expense) => expense.date.getFullYear().toString() === selectedYear)
    : expenses;

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {isExpenseFormVisible ? (
        <div>
          <ExpensesForm onAddExpense={addExpenseHandler} onCancel={toggleExpenseForm} />
        </div>
      ) : (
        <button onClick={toggleExpenseForm}>Add Expense</button>
      )}
      <ExpensesFilter onFilterChange={filterChangeHandler} selectedYear={selectedYear} />
      {filteredExpenses.length === 1 ? (
        <p>Only a single expense here. Please add more...</p>
      ) : (
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
      )}
    </div>
  );
}

export default App;
