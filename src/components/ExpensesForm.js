import React, { useState } from 'react';

function ExpenseForm() {
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setExpenseTitle(newTitle);
    console.log('Title:', newTitle);
  };

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    setExpenseAmount(newAmount);
    console.log('Amount:', newAmount);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setExpenseDate(newDate);
    console.log('Date:', newDate);
  };

  return (
    <div className="expense-form">
      <input
        type="text"
        placeholder="Expense Title"
        value={expenseTitle}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Expense Amount"
        value={expenseAmount}
        onChange={handleAmountChange}
      />
      <input
        type="date"
        placeholder="Expense Date"
        value={expenseDate}
        onChange={handleDateChange}
      />
      <button>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;
