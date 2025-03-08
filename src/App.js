import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Sign from './components/signup.jsx';
import ISMA from './components/survey_isma.jsx';
import Fatigue from './components/survey_fatigue.jsx';
import Insomnia from './components/survey_insomnia.jsx';
import Surveys from './components/survey.jsx';
import {Link} from 'react-router-dom'
import './App.css';

// Component to display login info/prompt before redirecting to login
const LoginPrompt = () => {
  return (
    <div className="login-prompt">
      <h2>Та нэвтрэх шаардлагатай байна!</h2>
      <p>Энэ хуудсыг хандахын тулд, та эхлээд нэвтэрнэ үү.</p>
      <Link to="/login" className="btn btn-primary">
        Нэвтрэх
      </Link>
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Global login state
  const [currentUser, setCurrentUser] = useState(null); // Store the logged-in user

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user); // Store the user object
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    // Optional: Clear any stored tokens or session data here (e.g., localStorage)
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} />
      <Routes>
        <Route 
          path="/" 
          element={<Home/>} 
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace /> 
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/signup" element={<Sign />} />
        <Route
          path="/survey/isma"
          element={
            isLoggedIn ? (
              <ISMA currentUser={currentUser}/>
            ) : (
              <LoginPrompt />
            )
          }
        />
        <Route
          path="/survey/fatigue"
          element={
            isLoggedIn ? (
              <Fatigue currentUser={currentUser}/>
            ) : (
              <LoginPrompt />
            )
          }
        />
        <Route
          path="/survey/insomnia"
          element={
            isLoggedIn ? (
              <Insomnia currentUser={currentUser}/>
            ) : (
              <LoginPrompt />
            )
          }
        />
        <Route path='/survey' 
        element={
            isLoggedIn ? (
              <Surveys />
            ) : (
              <LoginPrompt /> // Show login prompt before redirecting
            )
          }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;