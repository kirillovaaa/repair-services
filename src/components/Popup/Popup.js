import React from "react";
import "./Popup.css";
import closeIcon from "../../images/close-icon.svg";

function Popup({ title, isOpen, onClose, children }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__window">
        <h2 className="popup__heading">{title}</h2>

        {children}

        <button
          className="popup__close-button"
          type="button"
          id="popup-profile-close"
          onClick={onClose}
        >
          <img className="popup__close-icon" src={closeIcon} alt="Закрыть" />
        </button>
      </div>
    </div>
  );
}

export default Popup;
