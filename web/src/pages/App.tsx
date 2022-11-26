import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar'
import Home from './home/home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
