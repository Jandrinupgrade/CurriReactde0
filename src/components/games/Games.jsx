import React, { useState, useEffect } from "react";
import "./Games.scss";

const Games = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="stopwatch ">
      <h1>⏱{time}</h1>
      <span>⏰{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      <br /> <br />
      <div id="buttons">
        {!timerOn && time === 0 && (
          <button className="button" onClick={() => setTimerOn(true)}>
            Start
          </button>
        )}
        {timerOn && (
          <button className="button" onClick={() => setTimerOn(false)}>
            Stop
          </button>
        )}
        {!timerOn && time > 0 && (
          <button className="button" onClick={() => setTime(0)}>
            Reset
          </button>
        )}
        {!timerOn && time > 0 && (
          <button className="button" onClick={() => setTimerOn(true)}>
            Reinicio
          </button>
        )}
      </div>
      <img className="imgtwo" src="../.././images/candadoopen.jpg" alt="foto candado"/>
    </div>
  );
};

export default Games;
