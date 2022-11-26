import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar'
import Home from './home/home';
import Domains from './domain/Domains';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import ErrorPage from './error-page';
import { styled } from '@mui/material/styles';

const Container = styled('div')(() => ({
  margin: '5% 7%'
}));

function App() {
  return (
    <Router>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element= {<Home/>} errorElement= {<ErrorPage/>}/>
          <Route path="/domains" element= {<Domains/>}/>
          <Route path="*" element= {<Home/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
