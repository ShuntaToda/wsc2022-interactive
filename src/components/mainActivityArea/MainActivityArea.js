import React, { useEffect, useState } from "react";
import { QuizMode } from "./QuizMode";

export const MainActivityArea = ({ quiz, clearQuiz, missQuiz }) => {
  const [mode, setMode] = useState("");
  useEffect(() => {
    if (quiz.id !== undefined) {
      setMode("quiz");
    } else {
      setMode("");
    }
  }, [quiz]);
  return (
    <div id="main-activity-area" className="rounded">
      MainActivityArea
      {mode == "quiz" && quiz.id !== undefined && <QuizMode quiz={quiz} clearQuiz={clearQuiz} missQuiz={missQuiz}></QuizMode>}
    </div>
  );
};
