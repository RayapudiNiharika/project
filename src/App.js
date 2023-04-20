import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import Title from "./components/header/Header";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Title />
      <Login />
    </div>
  );
}

export default App;
