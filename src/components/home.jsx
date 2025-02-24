import React from "react";
import medical from '.././image/medical.png';
import profile from '.././image/profile.png'
import '.././styles/home.css'
import { Link } from "react-router-dom";


const Home = () =>{

    return (
        <div className="container">
            <div className="container-body">
                <div className="survey">
                    <h2 className="title">Олон улсын стрессийн <br></br> судалгаа</h2>
                    <p>Олон улсын стрессийн судалгаагаар ажлын байр, 
                        санхүүгийн байдал, нийгмийн харилцаа зэрэг хүчин 
                        зүйлс нь стрессийн түвшинд ихээхэн нөлөөлдөг болохыг тогтоох...</p>
                    <div className="button">
                    <Link to="/survey/isma" className="btn btn-primary">Судалгаа бөглөх</Link>
                    </div>
                </div>
                <div className="content">
                    <img src={medical} alt="Судалгааны зураг" />
                </div>
                <div className="description">
                    <p className="quote">АШУҮИС-ийн Шинжлэх ухаан технологийг дэмжих сангийн санхүүжилттэй 
                        “Хүн ам ба эмнэлэгт суурилсан эрүүл мэндийн их өгөгдлийн сан, дүн шинжилгээний тогтолцоо” 
                        судалгаа хөгжүүлэлтийн төслийн хүрээнд таныг энэхүү төсөлд оролцохыг урьж байна.</p>
                    <img src={profile} alt="Эмчийн профайл" />
                    <div className="profile">
                        <h4>Доктор, профессор С.Цогтсайхан</h4>
                        <p>АШУҮИС-ийн Биоанагаахын сургуулийн Дархлаа судлалын тэнхмийн багш</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
