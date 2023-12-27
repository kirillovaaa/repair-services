import React, { useEffect, useMemo, useRef, useState } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

function getInitialDate() {
  let saleEndDate = localStorage.getItem("saleEndDate");

  if (!saleEndDate) {
    const dt = new Date();
    saleEndDate = dt.setHours(dt.getHours() + 2);
    localStorage.setItem("saleEndDate", saleEndDate);
  }

  return Number(saleEndDate);
}

const Timer = () => {
  const initialDate = useMemo(() => getInitialDate(), []);

  const [secondsLeft, setSecondsLeft] = useState(
    Math.abs(initialDate - new Date()) / 1000
  );

  useInterval(() => {
    setSecondsLeft(Math.abs(initialDate - new Date()) / 1000);
  }, 1000);

  function getFormattedTime() {
    const date = new Date(secondsLeft * 1000).toISOString().substring(11, 19);
    return {
      hours: date.substring(0, 2),
      minutes: date.substring(3, 5),
      seconds: date.substring(6),
    };
  }

  return (
    <>
      <div class="discount__countdown-item">
        <span className="discount__countdown-time" id="hours">
          {getFormattedTime().hours}
        </span>
        <span className="discount__countdown-label">часов</span>
      </div>
      <span className="discount__countdown-division">:</span>
      <div class="discount__countdown-item">
        <span className="discount__countdown-time" id="minutes">
          {getFormattedTime().minutes}
        </span>
        <span className="discount__countdown-label">минут</span>
      </div>
      <span className="discount__countdown-division">:</span>
      <div class="discount__countdown-item">
        <span className="discount__countdown-time" id="seconds">
          {getFormattedTime().seconds}
        </span>
        <span className="discount__countdown-label">секунд</span>
      </div>
    </>
  );
};

export default Timer;
