import React from 'react';
import useDate from './custom hooks/useDate'; 
import './App.css'

function App() {
  const { date, addDays, addMonths } = useDate();

  return (
    <div>
      <p>Current Date: {date.toLocaleDateString()}</p>
      <button onClick={() => addDays(1)}>Add 1 Day</button>
      <button onClick={() => addMonths(1)}>Add 1 Month</button>
    </div>
  );
};

export default App;
