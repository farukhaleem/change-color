import './App.css';
import React from 'react';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <div className="main-box">
        <Cart />
        <Cart />
        <Cart />
      </div>  
    </div>
  );
}

export default App;
