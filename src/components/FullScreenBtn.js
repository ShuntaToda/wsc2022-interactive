import React from "react";

export const FullScreenBtn = () => {
  const handleFullScreen = () => {
    if (document.fullscreenElement == null) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <div onClick={handleFullScreen} className="c-fullscreen btn btn-outline-secondary">
      FullScreen
    </div>
  );
};
