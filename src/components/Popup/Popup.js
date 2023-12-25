import React from "react";
import "./Popup.css";
import closeIcon from "../../images/close-icon.svg";

function Popup({ isOpen, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // отменяем стандартный переход на адрес формы
    onSubmit(e);
  };

  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <form className="popup__form" onSubmit={handleSubmit}>
        <h2 className="popup__heading">
          Вызовите мастера сегодня и получите <br />
          скидку 15 % за скорость принятия решения <br /> 8-950-146-0196
        </h2>
        <div className="popup__input-container">
          <div className="popup__input-wrapper">
            <span className="popup__input-text">Телефон *</span>
            <input
              className="popup__input"
              type="text"
              name="number"
              minLength="2"
              maxLength="30"
              required={true}
            />
          </div>
          <div className="popup__input-wrapper">
            <span className="popup__input-text">
              Укажите удобное время для звонка
            </span>
            <span className="popup__input-subtitle">Например, после 10:00</span>

            <input
              className="popup__input"
              type="text"
              name="time"
              minLength="2"
              maxLength="30"
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

        <button
          className="popup__close-button"
          type="button"
          id="popup-profile-close"
          onClick={onClose}
        >
          <img className="popup__close-icon" src={closeIcon} alt="Закрыть" />
        </button>
      </form>
    </div>
  );
}

export default Popup;
