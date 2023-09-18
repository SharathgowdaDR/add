import React from 'react';
import './ExpensesFilter.css'; 

function Filter(props) {
  const handleFilterChange = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="filter">
      <label htmlFor="filter">Filter by Year:</label>
      <select id="filter" onChange={handleFilterChange} value={props.selectedYear}>
        <option value="">All</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

export default Filter;
