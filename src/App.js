import ExpenseItem from './components/ExpensesItems';
function App() {
  const expenses = [
    {
      title: 'Food',
      amount: 10,
      location: 'Restaurant',
    },
    {
      title: 'Petrol',
      amount: 100,
      location: 'Gas Station',
    },
    {
      title: 'Movie',
      amount: 200,
      location: 'Cinema',
    },
    {
      title: 'Groceries',
      amount: 50,
      location: 'Supermarket',
    },
  ];
    const expenseItems = [];
    for (let i = 0; i < expenses.length; i++) {
      const expense = expenses[i];
      expenseItems.push(
        <expensesItem> key={i}
        description={expense.title}
        amount={expense.amount}
        location={expense.location}
         </expensesItem>
      );
    }
  
    return <div>{expenseItems}</div>;
  }

export default App;
