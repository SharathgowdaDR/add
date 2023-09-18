import React, { useState } from 'react';

function ExpenseForm(props) {
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  const handleTitleChange = (event) => {
    setExpenseTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setExpenseAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setExpenseDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      title: expenseTitle,
      amount: parseFloat(expenseAmount),
      date: new Date(expenseDate),
    };

    props.onAddExpense(newExpense);

    setExpenseTitle('');
    setExpenseAmount('');
    setExpenseDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="Expense Title"
          value={expenseTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input
          type="number"
          placeholder="Expense Amount"
          value={expenseAmount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          placeholder="Expense Date"
          value={expenseDate}
          onChange={handleDateChange}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
