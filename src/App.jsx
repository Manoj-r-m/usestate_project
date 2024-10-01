import React, { useState } from "react";
import './App.css'; 

const App = () => {
  const data = [
    { name: "Raja", id: 1, image: '/images/pu.jpeg', age: '24' },
    { name: "Vikram", id: 2, image: '/images/v.jpeg', age: '25' },
    { name: "Thomas", id: 3, image: '/images/pa.jpeg', age: '24' },
    { name: "Sharef", id: 4, image: '/images/dq.jpeg', age: '28' },
  ];

  const [state, setState] = useState(data);

  const handleClear = () => {
    setState([]);
  };

  return (
    <div className="container">
      
      {state.length > 0 ? (
      <>
      <h1> 6 Birthdays Today</h1>
        <ul>
          {state.map((item) => (
            <li key={item.id} style={{ display: 'flex',  marginBottom: '20px'}}>
              <img 
                src={item.image} 
                
                style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '30px' }} 
              />
              <div>
                <strong>{item.name}</strong>
                <div style={{ fontSize: '14px', color: 'gray' }}>({item.age} years old)</div>
              </div>
            </li>
          ))}
        </ul>
      </>
      ) : (
        <p>No Data Found</p>
      )}
<button className="clear-button" onClick={handleClear}>Clear All</button>
    </div>
  );
};

export default App;