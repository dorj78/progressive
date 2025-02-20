import React from "react";
import medical from '.././image/medical.png';
import profile from '.././image/profile.png'
import '.././styles/home.css'


const Home = () =>{
    return (
        <div className="container">
            <div className="container-body">
                <div className="survey">
                    <h2>Олон улсын стрессийн <br></br> судалгаа</h2>
                    <p>Олон улсын стрессийн судалгаагаар ажлын байр, 
                        санхүүгийн байдал, нийгмийн харилцаа зэрэг хүчин 
                        зүйлс нь стрессийн түвшинд ихээхэн нөлөөлдөг болохыг тогтоох...</p>
                    <a href="#" className="button">Судалгаа Бөглөх</a>
                </div>
                <div className="content">
                    <img src={medical} alt="Судалгааны зураг" />
                </div>
                <div className="description">
                    <p className="quote">Sermo has transformed the way I connect, collaborate, 
                        and stay informed within the global medical community. 
                        The platform’s robust features – including forums, polls, 
                        and paid surveys – enable me to stay educated and adapt my practice 
                        to evolving standards of care.</p>
                    <img src={profile} alt="Эмчийн профайл" />
                    <div className="profile">
                        <h4>Dr. Kyle Lee</h4>
                        <p>Family Medicine & Sermo Medical Advisory Board | Canada</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
