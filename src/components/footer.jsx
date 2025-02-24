import React from "react";
import {Link} from 'react-router-dom'


const Footer = () =>{
    return(
        <div className="container">
            <div className="container-footer">
                <div className="footer-menu">
                    <div className="logo">
                        <h3>Medical Science</h3>
                        <p>Олон улсын жишигт нийцсэн судалгаа</p>
                    </div>
                    <div className="menu-list">
                        <h4>Холбоо барих</h4>
                        <ul>
                            <li>
                                <img src="" alt="" /> 
                                <p>+976 80181906</p>    
                            </li>
                            <li>
                                <img src="" alt="" /> 
                                <p>bigdata@mnums.edu.mn</p> 
                            </li>
                            <li>
                                <img src="" alt="" /> 
                                <p>Улаанбаатар, Монгол</p> 
                            </li>
                        </ul>
                    </div>
                    <div className="menu-list">
                        <h4>Туслах цэс</h4>
                        <ul>
                            <li>
                                <Link to=''>Судалгаа бөглөх</Link>   
                            </li>
                            <li>
                                <Link to=''>Бидний тухай</Link>   
                            </li>
                            <li>
                                <Link to=''>Мэдээ, мэдээлэл</Link>   
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; 2025 Research App. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
};

export default Footer