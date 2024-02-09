import React, { useEffect, useRef, useState } from "react";

export const Avatar = ({ playerPosition, setPlayerMoveLimit, movingDistance }) => {
  const player = useRef(null);
  useEffect(() => {
    const parentElement = player.current.parentElement;
    const rightDistance = parentElement.offsetWidth - (player.current.offsetLeft + player.current.offsetWidth);
    const bottomDistance = parentElement.offsetHeight - (player.current.offsetTop + player.current.offsetHeight);

    if (player.current.offsetTop < 2 * movingDistance) {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, top: true }));
    } else {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, top: false }));
    }

    if (player.current.offsetLeft < 2 * movingDistance) {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, left: true }));
    } else {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, left: false }));
    }

    if (rightDistance < 2 * movingDistance) {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, right: true }));
    } else {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, right: false }));
    }

    if (bottomDistance < 2 * movingDistance) {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, bottom: true }));
    } else {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, bottom: false }));
    }
  }, [playerPosition]);
  return (
    <div id="avatar" ref={player} style={{ top: playerPosition.y, left: playerPosition.x }}>
      Avatar
    </div>
  );
};
