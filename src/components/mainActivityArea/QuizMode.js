import React, { useState } from "react";

let answerTextColor = "";

export const QuizMode = ({ quiz, clearQuiz, missQuiz }) => {
  const [quizAnswerText, setQuizAnswerText] = useState("");
  const handleClearQuiz = () => {
    setQuizAnswerText("正解!!");
    answerTextColor = "#e64b4b";
    setTimeout(() => {
      clearQuiz();
    }, 3000);
  };
  const handleMissQuiz = () => {
    setQuizAnswerText("不正解!!");
    answerTextColor = "#4b93e6";
    setTimeout(() => {
      setQuizAnswerText("");
    }, 3000);
  };
  return (
    <div className="c-quiz p-4 position-relative">
      <div className="c-quiz__answer-text" style={{ color: answerTextColor }}>
        {quizAnswerText}
      </div>
      <div className="c-quiz__content" style={quizAnswerText !== "" ? { opacity: 0.3 } : {}}>
        <div className="fs-3 text-center">{quiz.text}</div>
        <div className="pt-4 d-flex justify-content-around">
          {quiz.item.map((i, index) => (
            <div key={index} onClick={index == quiz.answer ? handleClearQuiz : handleMissQuiz} className="btn btn-primary">
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
