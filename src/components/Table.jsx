import React from 'react';

function Table({ tableData, filter, onDelete, sortKey, setSortKey }) {
  const filteredData = tableData
    .filter((item) =>
      item.food.toLowerCase().includes(filter.toLowerCase()) ||
      item.expenses.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === 'category') return a.category.localeCompare(b.category);
      if (sortKey === 'description') return a.food.localeCompare(b.food);
      return 0;
    });

  return (
    <div className="table">
      <h2>Expenses Table</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>Sort By: </label>
        <select onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
          <option value="">None</option>
          <option value="description">Description</option>
          <option value="category">Category</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Food</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.food}</td>
              <td>{item.Description}</td>
              <td>{item.category}</td>
              <td>${item.amount}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>
                <button onClick={() => onDelete(index)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
