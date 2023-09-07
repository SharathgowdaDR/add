import './ExpensesItems.css';
function ExpensesItem(props) {
    return (
      <div className="expense-item">
        <h1>Expense Items</h1>
        <div className="expenses-item-description">
          <h2>{props.description}</h2>
          <div className="expenses-item-price">RS {props.amount}</div>
          <div className="expenses-location">{props.location}</div>
        </div>
      </div>
    );
  }
  
export default ExpensesItem;