/** @format */

import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleMap from "./components/maps";
import { cities } from "./data.json";

function App() {
  const [score, setScore] = useState(1500);
  const [indexCity, setIndexCity] = useState(0);
  const [currentCity, setCurrentCity] = useState(cities[indexCity]);
  const [status, setStatus] = useState('Waiting');
  useEffect(() => {
    console.log(cities);
  }, []);

  return (
    <div className='App container'>
      {JSON.stringify(cities)}
      <h3>My Score : {score}</h3>
      <h3>Status : {status}</h3>
      <SimpleMap />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
