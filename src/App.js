import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
// import Testing from "./components/home/testing";
import Welcome from "./components/home/Welcome";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Title from "./components/header/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
