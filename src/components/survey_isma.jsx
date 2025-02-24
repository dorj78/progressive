import React, { useState } from "react";
import "../styles/survey.css";
import { useNavigate } from "react-router-dom";
import stress from "../image/stress.png";
import { submitSurvey } from "../api"; // Adjust path based on your project structure

const Survey_isma = ({ currentUser }) => {
  const questions = [
    {
      id: "sleep_enough",
      question: "Та хангалттай унтаж амарсан ч ядарч сульдсан мэдрэмж төрдөг үү?",
    },
    {
      id: "appetite_change",
      question:
        "Таны хоолны дуршил өөрчлөгдсөн, хэвийн үед иддэгээс ч их буюу бага иддэг болсон уу?",
    },
    {
      id: "guilt_feeling",
      question: "Танд гэмшил эсвэл буруутай юм шиг мэдрэмж төрдөг үү?",
    },
    {
      id: "overthinking",
      question:
        "Та тайван амар байж чадахгүй үргэлж ямар нэг зүйлд санаа зовнидог уу?",
    },
    {
      id: "focus_memory",
      question:
        "Таны анхаарал төвлөрөл болон ой тогтоолтондоо сэтгэл ханамжгүй байдаг уу?",
    },
    {
      id: "no_hobby_time",
      question:
        "Таны дуртай зүйлс, хобби хийх цаг зав гарахгүй үе олон байна уу?",
    },
    {
      id: "muscle_pain",
      question:
        "Таны булчин өвддөг, толгой, нуруу болон биеийн бусад хэсэг өвдөх шинж илэрдэг үү?",
    },
    {
      id: "addiction",
      question: "Та архи, никотин зэрэг зүйлс хэрэглэх нь ихэссэн үү?",
    },
    {
      id: "work_at_home",
      question: "Шөнө оройтож, гэртээ ажил хийдэг үү?",
    },
    {
      id: "enough_time",
      question: "Та өөртөө хангалттай цагтай гэж боддог уу?",
    },
    {
      id: "ignore_problems",
      question:
        "Та асуудлуудаа үл тоомсорлож, огт анхаарал хандуулдаггүй байдалтай байна уу?",
    },
    {
      id: "perfectionist",
      question: "Та бүх зүйлийг төгс байлгахыг хүсдэг үү?",
    },
    {
      id: "bad_time_estimate",
      question:
        "Та ажлын цагийг дутуу тооцоолдог эсвэл илүү зарцуулдаг уу?",
    },
    {
      id: "overwhelmed",
      question: "Та ажилдаа дарагдаж байна вэ?",
    },
    {
      id: "low_self_esteem",
      question: "Таны өөртөө итгэх итгэл буурсан мэт санагддаг уу?",
    },
    {
      id: "impatient",
      question:
        "Та бусад хүмүүстэй харьцахдаа ихэвчлэн тэвчээргүй, хурдан уурладаг болсон уу?",
    },
    {
      id: "hurried",
      question: "Та яг л гүйж байгаа юм шиг санагддаг уу?",
    },
    {
      id: "road_rage",
      question:
        "Та жолоо барихдаа уур бухимдалтай, түрэмгий байдалтай болж, замын хөдөлгөөнд оролцохдоо бусад жолооч нарын эсрэг уурлаж бухимддаг уу?",
    },
    {
      id: "competitive",
      question: "Та бусадтай өрсөлдөхийг хүсдэг болсон уу?",
    },
    {
      id: "critical",
      question:
        "Танд бусдын талаар дүгнэх, шүүмжлэх байдал ихэссэн үү?",
    },
    {
      id: "distracted",
      question: "Та анхаарал сарнидаг болсон уу?",
    },
    {
      id: "low_libido",
      question:
        "Таны бэлгийн дур хүсэл (либидо) буурсан мэт санагдаж байна уу?",
    },
    {
      id: "teeth_grinding",
      question: "Та шүдээ хавирдаг болсон уу?",
    },
    {
      id: "performance_drop",
      question:
        "Таны гүйцэтгэл өмнөхөөсөө сайн биш болсон уу?",
    },
  ];

  const Result = () => {
    return (
      <div className="result">
        <h4>Стрессийн түвшин:</h4>
        <p>
           {result}
        </p>
      </div>
    );
  };

  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: parseInt(value, 10) || 0 }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(responses).length !== questions.length) {
      alert("Бүх асуултанд хариулна уу!");
      return;
    }

    try {
      if (!currentUser || !currentUser.user_id) {
        alert('User is not logged in or user ID is missing.');
        return;
      }

      // Filter responses to match QUESTIONS list and ensure integers
      const cleanedResponses = Object.fromEntries(
        questions.map(q => [q.id, responses[q.id] || 0])
      );

      const submission = {
        responses: cleanedResponses,
        user_id: parseInt(currentUser.user_id, 10),
      };

      const response = await submitSurvey(submission);
      setResult(response.question_mn);
    } catch (error) {
      console.error("Error submitting survey:", error.response?.data || error.message);
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <div className="container-survey">
      <div className="left-side">
        <div className="button-back" onClick={() => navigate(-1)}>
          <p>Буцах</p>
        </div>
        <h3 className="title">Олон улсын стрессийн судалгаа</h3>
        <img src={stress} alt="stress" />
        <p className="script">
          Олон улсын стрессийн судалгаагаар ажлын байр, санхүүгийн байдал,
          нийгмийн харилцаа зэрэг хүчин зүйлс нь стрессийн түвшинд ихээхэн
          нөлөөлдөг болохыг тогтоох зорилготой.
        </p>
      </div>
      <div className="survey-form">
        {result ? (
          <Result />
        ) : (
          <form onSubmit={handleSubmit}>
            {questions.map((q, index) => (
              <div key={q.id} className="question">
                <label htmlFor={q.id}>
                  {index + 1}. {q.question}
                  {q.additional && <span> {q.additional}</span>}
                </label>
                <div className="option">
                  <input
                    type="radio"
                    id={`${q.id}-yes`}
                    name={q.id}
                    value="1"
                    checked={responses[q.id] === 1}
                    onChange={() => handleChange(q.id, "1")}
                  />
                  <label htmlFor={`${q.id}-yes`}>Тийм</label>
                  <input
                    type="radio"
                    id={`${q.id}-no`}
                    name={q.id}
                    value="0"
                    checked={responses[q.id] === 0}
                    onChange={() => handleChange(q.id, "0")}
                  />
                  <label htmlFor={`${q.id}-no`}>Үгүй</label>
                </div>
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Илгээх
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Survey_isma;