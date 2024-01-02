import React from "react";
import "../../components/Popup/Popup.css";

const RequestForm = ({ onSubmit }) => {
  return (
    <form className="popup__form" name="requestForm" onSubmit={onSubmit}>
      <h3 className="popup__heading">
        Вызовите мастера сегодня и получите <br />
        <span className="colortext">скидку 15 % </span>
        за скорость принятия решения <br />
        <span className="underline"> 8-950-146-0196 </span>
      </h3>
      <h3 className="popup__heading-450">Закажите звонок</h3>

      <div className="popup__input-container">
        <div className="popup__input-wrapper">
          <span className="popup__input-text">
            Имя <span className="colortext"> *</span>
          </span>

          <input
            className="popup__input"
            type="name"
            name="name"
            minLength="2"
            maxLength="30"
            required={true}
          />
        </div>
        <div className="popup__input-wrapper">
          <span className="popup__input-text">
            Телефон <span className="colortext"> *</span>
          </span>
          <input
            className="popup__input"
            type="phone"
            name="phone"
            minLength="9"
            maxLength="18"
            required={true}
          />
        </div>
        <div className="popup__input-wrapper">
          <span className="popup__input-text">Опишите, что случилось</span>
          <input
            className="popup__input popup__input-description"
            type="text"
            name="Description"
            minLength="2"
            maxLength="200"
            required={true}
          />
        </div>
      </div>

      <button type="submit" className="popup__save-button">
        Вызвать мастера
      </button>
    </form>
  );
};

export default RequestForm;
