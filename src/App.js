import ExpensesItems from './components/ExpensesItems.js';
function App() {
  const expenses = [
    {
      title: 'Food',
      amount: 10,
      location: 'Restaurant',
      date:new Date(2021,5,12)
    },
    {
      title: 'Petrol',
      amount: 100,
      location: 'Gas Station',
      date:new Date(2021,5,12)
    },
    {
      title: 'Movie',
      amount: 200,
      location: 'Cinema',
      date:new Date(2021,5,12)
    },
    {
      title: 'Groceries',
      amount: 50,
      location: 'Supermarket',
      date:new Date(2021,5,12)
    },
  ];
    const expensesItems = [];
    for (let i = 0; i < expenses.length; i++) {
      const expenses = expenses[i];
      expensesItems.push(
        <expensesItem> key={i}
        description={expenses.title}
        amount={expenses.amount}
        location={expenses.location}
        date={expenses.date}
         </expensesItem>
      );
    }
  
    return <div>{expensesItems}</div>;
  }

export default App;
