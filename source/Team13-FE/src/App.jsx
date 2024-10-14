import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm'; 
import MyListings from './components/MyListings'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<LoginForm />} />
          
          
          <Route path="/my-listings" element={<MyListings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
