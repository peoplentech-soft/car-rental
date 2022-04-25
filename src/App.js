import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <KeyFeatures/>
    </div>
  );
}

export default App;
