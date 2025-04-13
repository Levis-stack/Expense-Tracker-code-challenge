import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <form className="filter-form">
        <h2>Search</h2><i className="fas fa-search"></i>
        
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by food or expense name"
        />
      </form>
    </div>
  );
}

export default Filter;
