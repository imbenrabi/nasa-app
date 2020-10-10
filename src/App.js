import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"
import NavBar from './components/NavBar';
import Container from './components/Container';



function App() {
  return (
    <div>
      <NavBar />
      <Container />
    </div>

  )
}



export default App;
