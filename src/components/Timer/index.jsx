import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id;

    if (delay) {
      id = setInterval(tick, delay);
    }

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [delay]);
};

function saveDateTimestamp() {
  const date = moment(Date.now());
  const saleEndDate = date.add(moment.duration(4, "hours")).toString();
  localStorage.setItem("saleEndDate", saleEndDate);
  return saleEndDate;
}

const Timer = () => {
  const [initialDate, setInitialDate] = useState();
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let saleEndDate = localStorage.getItem("saleEndDate");

    if (!saleEndDate) {
      setInitialDate(saveDateTimestamp());
    } else {
      // разница в днях между сейчас и датой окончания скидки должна быть больше или равна одному, чтобы перезапустить скидку
      const shouldSaleRestart =
        moment(Date.now()).diff(moment(saleEndDate), "days") >= 1;
      if (shouldSaleRestart) {
        setInitialDate(saveDateTimestamp());
      } else {
        setInitialDate(saleEndDate);
      }
    }
  }, []);

  useEffect(() => {
    if (initialDate) {
      const secs = calculateSecondsLeft();
      if (secs > 0) {
        setSecondsLeft(secs);
        setIsTimerActive(true);
      }
    }
  }, [initialDate]);

  useEffect(() => {
    if (isTimerActive && secondsLeft <= 0) {
      setIsTimerActive(false);
    }
  }, [isTimerActive, secondsLeft]);

  useInterval(
    () => {
      const secs = calculateSecondsLeft();
      setSecondsLeft(secs);
    },
    isTimerActive ? 1000 : null
  );

  function getFormattedTime() {
    const date = new Date(secondsLeft * 1000).toISOString().substring(11, 19);
    return {
      hours: date.substring(0, 2),
      minutes: date.substring(3, 5),
      seconds: date.substring(6),
    };
  }

  function calculateSecondsLeft() {
    return moment(initialDate).diff(moment(Date.now()), "seconds");
  }

  const { hours, minutes, seconds } = getFormattedTime();

  return (
    <>
      <div className="discount__countdown-item">
        <span className="discount__countdown-time" id="hours">
          {hours}
        </span>
        <span className="discount__countdown-label">часов</span>
      </div>
      <span className="discount__countdown-division">:</span>
      <div className="discount__countdown-item">
        <span className="discount__countdown-time" id="minutes">
          {minutes}
        </span>
        <span className="discount__countdown-label">минут</span>
      </div>
      <span className="discount__countdown-division">:</span>
      <div className="discount__countdown-item">
        <span className="discount__countdown-time" id="seconds">
          {seconds}
        </span>
        <span className="discount__countdown-label">секунд</span>
      </div>
    </>
  );
};

export default Timer;
