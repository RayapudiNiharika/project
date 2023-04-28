<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Title from './components/Header';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

=======
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
// import Testing from "./components/home/testing";
import Welcome from "./components/home/Welcome";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Title from "./components/header/Header";
import Godown from "./components/pages/Godown/Godown";
import Employees from "./components/pages/Employees/Employees";
import CreateEmployee from "./components/pages/Employees/CreateEmployee";
import Inwards from "./components/pages/Inwards/Inwards";
import CreateInwards from "./components/pages/Inwards/CreateInwards";
import Outwards from "./components/pages/Outwards/Outwards";
import CreateOutwards from "./components/pages/Outwards/CreateOutwards";
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div >
      <Title/>
      <Login />
    </div>
=======
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Title />
                <Login handleLogout={handleLogout} />
              </div>
            }
          />
          <Route
            path="/Welcome"
            element={<Welcome handleLogin={handleLogin} />}
          />

          <Route path='/godown' element={<Godown/>}></Route>
          <Route path='/employees' element={<Employees/>}></Route>
          <Route path='/createemployee' element={<CreateEmployee />}></Route>
          <Route path='/inwards' element={<Inwards/>}></Route>
          <Route path='/createinwards' element={<CreateInwards />}></Route>
          <Route path='/outwards' element={<Outwards/>}></Route>
          <Route path='/createoutwards' element={<CreateOutwards />}></Route>
        </Routes>
      </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
