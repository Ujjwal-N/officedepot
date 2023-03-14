import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
function App() {

  return (
    <div className="App">
        <NavbarComp />
    </div>
  );
}


export default App;

