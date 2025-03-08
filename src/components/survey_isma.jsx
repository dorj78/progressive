import React, { useState } from "react";
import "../styles/survey.css";
import { useNavigate } from "react-router-dom";
import stress from "../image/stress.png";
import { submitSurvey } from "../api";
import surveyData from "../components/questions.json"

const Survey_isma = ({ currentUser }) => {
  const questions = surveyData.isma;
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

      const cleanedResponses = Object.fromEntries(
        questions.map(q => [q.id, responses[q.id] || 0])
      );

      const submission = {
        responses: cleanedResponses,
        user_id: parseInt(currentUser.user_id, 10),
      };

      const response = await submitSurvey("isma", submission);
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