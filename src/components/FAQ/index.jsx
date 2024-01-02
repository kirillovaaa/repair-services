import { useState } from "react";
import plus from "../../images/plus-icon.svg";
import minus from "../../images/minus-icon.svg";

const FAQ = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleView() {
    setIsVisible((visible) => !visible);
  }

  return (
    <button className="question__item" type="button" onClick={toggleView}>
      <div className="question__item-container">
        <span className="question__item-question">{question}</span>
        <img
          className="question__item-image"
          src={isVisible ? minus : plus}
          alt="Иконка плюса"
        />
      </div>
      {isVisible && <p className="question__item-answer">{answer}</p>}
    </button>
  );
};

export default FAQ;
