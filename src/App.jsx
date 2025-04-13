import { useState } from 'react';
import './App.css';
import initialItems from './components/user';
import Form from './components/Form';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  const [filter, setFilter] = useState('');
  const [tableData, setTableData] = useState(initialItems);
  const [sortKey, setSortKey] = useState('');

  const handleAddExpense = (newExpense) => {
    setTableData([...tableData, newExpense]);
  };

  const handleDelete = (indexToDelete) => {
    const newData = tableData.filter((_, index) => index !== indexToDelete);
    setTableData(newData);
  };

  return (
    <>
      <h1 style={{ color: 'white' }}><u>Expense Tracker</u></h1>
      <em style={{ color: 'white' }}>Track your expenses easily!</em>
      <div className="container">
        <div className="flex-container">
          <Form onAddExpense={handleAddExpense} />
          <div className="table-wrapper">
            <Filter filter={filter} setFilter={setFilter} />
            <Table
              tableData={tableData}
              filter={filter}
              onDelete={handleDelete}
              sortKey={sortKey}
              setSortKey={setSortKey}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
