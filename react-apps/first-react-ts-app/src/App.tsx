import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';

/* <img src={logo} className="App-logo" alt="logo" /> */
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
    </div>
  );
}
