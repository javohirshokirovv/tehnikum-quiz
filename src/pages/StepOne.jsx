import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [answer, setAnswer] = useState("");
  const [answerError, setAnswerError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const regex = /^[0-9]+$/; 

  const handleChange = (event) => {
    const value = event.target.value;
    setAnswer(value);

    if (regex.test(value)) {
      setAnswerError(false);
    } else {
      setAnswerError(true);
    }
  };

  const handleClick = () => {
    if (!answerError && answer.length > 0) {
      navigate("/next-step"); 
    }
  };

  useEffect(() => {
    if (answer.length > 0 && !answerError) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [answer, answerError]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={0} />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
                value={answer}
                onChange={handleChange}
              />
              {answerError && (
                <span id="error-message">
                  Введите номер в правильном формате, например: 12345
                </span>
              )}
            </label>
            <button type="button" disabled={buttonDisabled} id="next-btn" onClick={handleClick}>
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
