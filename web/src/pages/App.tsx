import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar'
import Home from './home/home';
import Domains from './domain/domains';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import ErrorPage from './error-page';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<Home/>} errorElement= {<ErrorPage/>}/>
        <Route path="/domains" element= {<Domains/>}/>
        <Route path="*" element= {<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
