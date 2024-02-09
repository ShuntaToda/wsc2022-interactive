import React, { useEffect, useRef } from "react";

export const QuizBarrier = ({ playerPosition, barrier, index, selectBarrier, setPlayerMoveLimit }) => {
  const barrierRef = useRef(null);

  useEffect(() => {
    const playerRight = playerPosition.x + 40;
    if (playerRight >= barrierRef.current.offsetLeft) {
      selectBarrier(barrier, index);
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, right: true }));
    }
  }, [playerPosition]);

  const handleClick = () => {
    selectBarrier(barrier, index);
    setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, right: true }));
  };

  useEffect(() => {
    barrierRef.current.addEventListener("click", handleClick);
  }, []);
  return (
    <div ref={barrierRef} className="c-quiz-barrier__barrier">
      barrier
    </div>
  );
};
