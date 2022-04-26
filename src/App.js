import React from 'react';
import './App.css';
import Testimonial from './components/Testimonial/Testimonial';
import Header from './components/Header/Header';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import Navbar from './components/Navbar/Navbar';
import RentalFleets from './components/RentalFleets/RentalFleets';
import RentalService from './components/RentalService/RentalService';
import WhyChooseUs from './components/WhyChooseUS/WhyChooseUs';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <KeyFeatures />
      <RentalService />
      <RentalFleets />
      <Testimonial />
      <WhyChooseUs />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
