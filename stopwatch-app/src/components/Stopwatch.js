import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prevtime) => prevtime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start]);
  return (
    <>
      <h1>Stopwatch</h1>
      <p>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
      </p>
      <div>
        <button onClick={() => setStart(true)}>start</button>
        <button onClick={() => setStart(false)}>stop</button>
        <button
          onClick={() => {
            setTime(0);
            setStart(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
