import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import Navbar from './components/Navbar/Navbar';
import RentalFleets from './components/RentalFleets/RentalFleets';
import RentalService from './components/RentalService/RentalService';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <KeyFeatures/>
      <RentalService/>
      <RentalFleets/>
    </div>
  );
}

export default App;
