import React, { useState } from "react";
import "../styles/survey.css";
import { useNavigate } from "react-router-dom";
import hevshinj from "../image/hevshinj.png";
import { submitSurvey } from "../api";
import surveyData from "../components/questions.json";

const Fatigue = ({ currentUser }) => {
  const questions = surveyData.fatigue;
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  // Define options with labels and corresponding values.
  const options = [
    { value: 0, label: "Үгүй" },
    { value: 1, label: "Бага зэрэг" },
    { value: 3, label: "Дунд зэрэг" },
    { value: 6, label: "Хүнд" }
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

      // Prepare responses according to questions.
      const cleanedResponses = Object.fromEntries(
        questions.map((q) => [q.id, responses[q.id] || 0])
      );

      const submission = {
        responses: cleanedResponses,
        user_id: parseInt(currentUser.user_id, 10)
      };

      const response = await submitSurvey("fatigue", submission);
      setResult(response.question_mn);
    } catch (error) {
      console.error("Error submitting survey:", error.response?.data || error.message);
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  const Result = () => (
    <div className="result">
      <h4>Ядаргааны түвшин:</h4>
      <p>{result}</p>
    </div>
  );

  return (
    <div className="container-survey">
      <div className="left-side">
        <div className="button-back" onClick={() => navigate(-1)}>
          <p>Буцах</p>
        </div>
        <h3 className="title">Архаг ядаргаа</h3>
        <img src={hevshinj} alt="hevshinj" />
        <p className="script">
          Архаг ядаргаа нь өдөр тутмын үйл ажиллагааг саатуулж, бие махбодын эрч хүчийг ихээхэн алдагдуулдаг.
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

export default Fatigue;
