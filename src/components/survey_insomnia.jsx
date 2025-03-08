import React, { useState } from "react";
import "../styles/survey.css";
import { useNavigate } from "react-router-dom";
import psychology from "../image/psychology.png";
import { submitSurvey } from "../api";
import surveyData from "../components/questions.json";

const Insomnia = ({ currentUser }) => {
  const questions = surveyData.insomnia;
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const options = [
    { value: 0, label: "Огт үгүй" },
    { value: 1, label: "Бага зэрэг" },
    { value: 2, label: "Заримдаа" },
    { value: 3, label: "Их" },
    { value: 4, label: "Маш их" }
  ];

  const handleChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: parseInt(value, 10) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(responses).length !== questions.length) {
      alert("Бүх асуултанд хариулна уу!");
      return;
    }

    try {
      if (!currentUser || !currentUser.user_id) {
        alert("User is not logged in or user ID is missing.");
        return;
      }

      const cleanedResponses = Object.fromEntries(
        questions.map((q) => [q.id, responses[q.id] || 0])
      );

      const submission = {
        responses: cleanedResponses,
        user_id: parseInt(currentUser.user_id, 10)
      };

      const response = await submitSurvey("insomnia", submission);
      setResult(response.question_mn);
    } catch (error) {
      console.error("Error submitting survey:", error.response?.data || error.message);
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  const Result = () => (
    <div className="result">
      <h4>Нойргүйдлийн түвшин:</h4>
      <p>{result}</p>
    </div>
  );

  return (
    <div className="container-survey">
      <div className="left-side">
        <div className="button-back" onClick={() => navigate(-1)}>
          <p>Буцах</p>
        </div>
        <h3 className="title">Нойрны асуумж</h3>
        <img src={psychology} alt="psychology" />
        <p className="script">
        Эдгээр нойрны асуултууд нь таны унтах, сэрэх болон нойргүйдлийн түвшинг үнэлдэг.
        </p>
      </div>
      <div className="survey-form">
        {result ? (
          <Result />
        ) : (
          <form onSubmit={handleSubmit}>
            {questions.map((q, index) => (
              <div key={q.id} className="question">
                <label>{index + 1}. {q.question}</label>
                <div className="option">
                  {options.map((option) => (
                    <React.Fragment key={`${q.id}-${option.value}`}>
                      <input
                        type="radio"
                        id={`${q.id}-${option.value}`}
                        name={q.id}
                        value={option.value}
                        checked={responses[q.id] === option.value}
                        onChange={() => handleChange(q.id, option.value)}
                      />
                      <label htmlFor={`${q.id}-${option.value}`}>{option.label}</label>
                    </React.Fragment>
                  ))}
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

export default Insomnia;
