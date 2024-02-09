import React, { useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import { QuizBarrier } from "./QuizBarrier";

export const MovingArea = ({
  playerPosition,
  setQuiz,
  barriers,
  setPlayerMoveLimit,
  movingDistance,
  stage,
  stageColor,
  setStage,
}) => {
  const selectBarrier = (b, index) => {
    setQuiz({ ...b, index: index });
  };

  return (
    <div
      id="moving-area"
      className="mt-4"
      style={{
        backgroundColor: stageColor[stage],
      }}
    >
      <Avatar playerPosition={playerPosition} movingDistance={movingDistance} setPlayerMoveLimit={setPlayerMoveLimit}></Avatar>
      <div className="c-quiz-barrier">
        {barriers.map((barrier, index) => (
          <QuizBarrier
            index={index}
            key={index}
            barrier={barrier}
            playerPosition={playerPosition}
            setPlayerMoveLimit={setPlayerMoveLimit}
            selectBarrier={selectBarrier}
          ></QuizBarrier>
        ))}
      </div>
    </div>
  );
};
