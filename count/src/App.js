import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    readData();
  }, []);

  function increment() {

    setCount((prevCount) => prevCount + 1);

    const countData = {
      count: count + 1
    }

    const jsonData = JSON.stringify(countData);

    localStorage.setItem('count', jsonData);

  }

  function readData() {

    const jsonData = localStorage.getItem('count');

    const data = JSON.parse(jsonData);

    if (data === null) {
      return;
    }

    setCount(data.count);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button className="btn" onClick={increment}>Count { count }</button>
      </header>
    </div>
  );
}

export default App;
