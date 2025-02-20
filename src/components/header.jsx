import React from "react";
import {Link} from "react-router-dom"

const Header = () =>{
    return (
        <div class="container">
            <div className="header">
            <h2><Link to='/'>Medical Research</Link></h2>
            <nav className="link_section">
                <ul>
                    <li><Link to='/'>Судалгаа Бөглөх</Link></li>
                    <li><Link to='/about'>Бидний Тухай</Link></li>
                    <li><Link to='/'>Холбоо Барих</Link></li>
                </ul>
            </nav>
            <nav className="login_section">
                <ul>
                    <li><button className="login">Нэвтрэх</button></li>
                    <li><button className="button">Бүртгүүлэх</button></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default Header;
