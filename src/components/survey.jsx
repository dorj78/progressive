import {React} from "react";
import '../styles/surveys.css'
import stress from '../image/stress.png'
import hevshinj from '../image/hevshinj.png'
import psychology from '../image/psychology.png'
import {Link} from 'react-router-dom'

const Survey = () => {
    const cards = [
        {
          title: "Олон улсын стрессийн судалгаа",
          img: stress,
          text: "Олон улсын стрессийн судалгаагаар ажлын байр, санхүүгийн байдал, нийгмийн харилцаа зэрэг хүчин зүйлс нь стрессийн түвшинд ихээхэн нөлөөлдөг болохыг тогтоох зорилготой.",
          route:'/survey/isma'
        },
        {
          title: "Эрүүл мэндийн хэв маягийн судалгаа",
          img: hevshinj,
          text: "Эрүүл мэндийн хэв маягийн судалгаагаар хооллолт, дасгал хөдөлгөөн, унтах цаг зэрэг хүчин зүйлсийн эрүүл мэндэд нөлөөлөхийг судлах зорилготой."
        },
        {
          title: "Сэтгэлзүйн судалгаа",
          img: psychology,
          text: "Сэтгэлзүйн судалгаагаар сэтгэл санааны эрүүл мэнд, стрессийн менежмент, нийгмийн дэмжлэгийн нөлөөллийг тодорхойлох зорилготой."
        },
      ];

  return (
    <div className="container-surveys">
        {cards.map((card)=>(
            <Link to={card.route}>
                <div className="card-container">
                    <h3>{card.title}</h3>
                    <img src={card.img} alt={card.title} />
                    <p>{card.text}</p>
                </div>
            </Link>
        ))}
    </div>
  );
};

export default Survey;
