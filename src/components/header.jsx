import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = ({ isLoggedIn, onLogout, currentUser }) => {
  return (
    <div className="container">
      <div className="header">
        <h2>
          <Link to="/" className="logo">
            Medical Research
          </Link>
        </h2>
        <nav className="link_section">
          <ul>
            <li>
              <Link to="/survey">Судалгаа Бөглөх</Link>
            </li>
            <li>
              <Link to="/about">Бидний Тухай</Link>
            </li>
            <li>
              <Link to="/contact">Мэдээ, мэдээлэл</Link>
            </li>
          </ul>
        </nav>
        <div className="login_section">
          {isLoggedIn ? (
            <div className="user-profile">
              <span>Тавтай морил, <span style={{color:'#6b4fe0',fontWeight:'bold'}}>{currentUser?.firstname|| 'Хэрэглэгч'}</span></span>
              <button
                onClick={onLogout}
                className="btn btn-secondary"
                aria-label="Logout"
              >
                Гарах
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary">
                Нэвтрэх
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Бүртгүүлэх
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;