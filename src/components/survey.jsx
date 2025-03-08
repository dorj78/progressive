import {React} from "react";
import '../styles/surveys.css'
import stress from '../image/stress.png'
import hevshinj from '../image/hevshinj.png'
import psychology from '../image/psychology.png'
import {Link} from 'react-router-dom'

const Survey = () => {
    const cards = [
        {
          title: "Стрессийн судалгаа",
          img: stress,
          text: "Олон улсын стрессийн судалгаагаар ажлын байр, санхүүгийн байдал, нийгмийн харилцаа зэрэг хүчин зүйлс нь стрессийн түвшинд ихээхэн нөлөөлдөг болохыг тогтоох зорилготой.",
          route:'/survey/isma'
        },
        {
          title: "Архаг ядаргаа",
          img: hevshinj,
          text: "Архаг ядаргаа нь өдөр тутмын үйл ажиллагааг саатуулж, бие махбодын эрч хүчийг ихээхэн алдагдуулдаг.",
          route:'/survey/fatigue'
        },
        {
          title: "Нойрны асуумж",
          img: psychology,
          text: "Сэтгэлзүйн судалгаагаар сэтгэл санааны эрүүл мэнд, стрессийн менежмент, нийгмийн дэмжлэгийн нөлөөллийг тодорхойлох зорилготой.",
          route:'/survey/insomnia'
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
