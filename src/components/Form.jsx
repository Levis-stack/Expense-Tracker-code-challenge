import React, { useState } from 'react';

function Form({ onAddExpense }) {
  const [formData, setFormData] = useState({
    food: '',
    Description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.food || !formData.Description || !formData.date) return;
    onAddExpense({ ...formData, amount: Number(formData.amount) });
    setFormData({
      food: '',
      Description: '',
      category: '',
      amount: '',
      date: '',
    });
  };

  return (
    <div id="form">
      <h2 style={{ color: 'white' }}>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="food" value={formData.food} onChange={handleChange} placeholder="Enter Food Name" />
        <br />
        <input type="text" name="Description" value={formData.Description} onChange={handleChange} placeholder="Enter Description Name" />
        <br />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Enter Category Name" />
        <br />
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Enter Amount" />
        <br />
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form ;
