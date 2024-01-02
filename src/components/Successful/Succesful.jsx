import React from "react";
import "./Succesful.css";
import success from "../../images/success.svg";
import closeIcon from "../../images/close-icon.svg";

const Succesful = ({ isOpen, onClose }) => {
  return (
    <div className={`successful ${isOpen ? "successful_opened" : ""}`}>
      <div className="successful__window">
        <img className="successful__image" src={success} alt="Успешно" />
        <span className="successful__text">Заявка принята</span>

        <button
          className="successful__close-button"
          type="button"
          onClick={onClose}
        >
          <img
            className="successful__close-icon"
            src={closeIcon}
            alt="Закрыть"
          />
        </button>
      </div>
    </div>
  );
};

export default Succesful;
