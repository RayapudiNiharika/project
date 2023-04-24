import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import Welcome from "./components/home/Welcome";
import { useState } from "react";
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
              loggedIn ? (
                <Welcome handleLogout={handleLogout} />
              ) : (
                <>
                  <Title />
                  <Login handleLogin={handleLogin} />
                </>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
