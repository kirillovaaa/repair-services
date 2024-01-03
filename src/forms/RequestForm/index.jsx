import React from "react";
import "../../components/Popup/Popup.css";

const RequestForm = ({ onSubmit, showLoading, showError }) => {
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
            type="tel"
            name="phone"
            pattern="(?:\+7|8)(?:9)[0-9]{9}"
            minLength="9"
            maxLength="18"
            required={true}
          />
        </div>
        <div className="popup__input-wrapper">
          <span className="popup__input-text">Опишите, что случилось</span>
          <textarea
            className="popup__input popup__input-description"
            type="text"
            name="message"
            minLength="10"
            maxLength="500"
            required={true}
          />
        </div>

        {showError && (
          <h4 className="popup__error-text">
            Ошибка сервера. Попробуйте снова или позвоните нам
          </h4>
        )}
      </div>

      <button
        type="submit"
        className="popup__save-button"
        disabled={showLoading}
      >
        {showLoading ? "Отправка..." : "Вызвать мастера"}
      </button>
    </form>
  );
};

export default RequestForm;
