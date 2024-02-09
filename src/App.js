import { createContext, useCallback, useEffect, useState } from "react";
import { MainActivityArea } from "./components/mainActivityArea/MainActivityArea";
import { MovingArea } from "./components/movingArea/MovingArea";
import { ParallaxObject } from "./components/ParallaxObject";
import { FullScreenBtn } from "./components/FullScreenBtn";
import './App.css';

const barrierObj = {
  id: Math.floor(Math.random() * 1000000),
  text: "一番大きいのを選べ",
  item: ["10", "20", "30", "40"],
  answer: 3,
};

const movingDistance = 20;
const stageColor = ["#ffd4b3", "#ffe7b3", "#b4ffb3", "#b3ffe2", "#b3f7ff"];

function App() {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [playerMoveLimit, setPlayerMoveLimit] = useState({
    top: false,
    bottom: false,
    right: false,
    left: false,
  });

  const [quiz, setQuiz] = useState({});
  const [barriers, setBarriers] = useState([barrierObj, barrierObj]);
  const [stage, setStage] = useState(0);

  const clearQuiz = () => {
    setQuiz({});
    setBarriers((prevBarriers) => prevBarriers.splice(0, 1));
    setPlayerMoveLimit({
      top: false,
      bottom: false,
      right: false,
      left: false,
    });
  };
  const missQuiz = () => {
    setQuiz({});
  };

  useEffect(() => {
    if (barriers.length == 0) {
      setStage(stage + 1);
      setBarriers([barrierObj, barrierObj]);
      setPlayerPosition({ x: 0, y: 0 });
    }
  }, [barriers]);

  const handleKeyDown = (e) => {
    if (e.key == "ArrowRight" && !playerMoveLimit.right) {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x + movingDistance,
        y: currentPosition.y,
      }));
    } else if (e.key == "ArrowLeft" && !playerMoveLimit.left) {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x - movingDistance,
        y: currentPosition.y,
      }));
    } else if (e.key == "ArrowUp" && !playerMoveLimit.top) {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x,
        y: currentPosition.y - movingDistance,
      }));
    } else if (e.key == "ArrowDown" && !playerMoveLimit.bottom) {
      setPlayerPosition((currentPosition) => ({
        x: currentPosition.x,
        y: currentPosition.y + movingDistance,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerPosition]);

  return (
    <div className="App h-100 mt-5">
      <FullScreenBtn></FullScreenBtn>
      <MainActivityArea quiz={quiz} clearQuiz={clearQuiz} missQuiz={missQuiz}></MainActivityArea>
      <MovingArea
        barriers={barriers}
        setQuiz={setQuiz}
        playerPosition={playerPosition}
        setPlayerMoveLimit={setPlayerMoveLimit}
        movingDistance={movingDistance}
        stage={stage}
        stageColor={stageColor}
      ></MovingArea>
      <ParallaxObject></ParallaxObject>
    </div>
  );
}

export default App;
