import React, { useRef } from "react";
import "./Popup.css";
import closeIcon from "../../images/close-icon.svg";

function Popup({ title, isOpen, onClose, children }) {
  const windowRef = useRef();

  function handleClose(e) {
    onClose(e);
    windowRef.current.querySelector("form").reset();
  }

  return (
    <div ref={windowRef} className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__window">
        <h2 className="popup__heading">{title}</h2>

        {children}

        <button
          className="popup__close-button"
          type="button"
          id="popup-profile-close"
          onClick={handleClose}
        >
          <img className="popup__close-icon" src={closeIcon} alt="Закрыть" />
        </button>
      </div>
    </div>
  );
}

export default Popup;
