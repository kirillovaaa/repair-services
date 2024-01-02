import React from "react";
import "./Discount.css";
import Timer from "../Timer";

function Discount({ onSubmit }) {
  return (
    <form
      id="discount"
      className="discount"
      name="discount"
      onSubmit={onSubmit}
    >
      <h2 className="discount__title">
        Скидка <span className="colortext"> 15% </span> при{" "}
        <br className="br__discount" />
        онлайн заказе
      </h2>
      <div className="discount__container">
        <h3 className="discount__container-subtitle">
          Оставьте номер телефона или позвоните
        </h3>
        <button className="discount__container-button">
          <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
        </button>
      </div>
      <div className="discount__input-container">
        <input
          className="discount__input"
          type="text"
          name="name"
          placeholder="Имя *"
          minLength="2"
          maxLength="30"
          required={true}
        />
        <input
          className="discount__input"
          type="tel"
          name="phone"
          pattern="(?:\+7|8)(?:9)[0-9]{9}"
          placeholder="Телефон *"
          minLength="10"
          maxLength="16"
          required={true}
        />
        <textarea
          className="discount__input discount__input-message"
          type="text"
          name="message"
          placeholder="Опишите, что у вас случилось"
          minLength="10"
          maxLength="500"
          required={true}
        />
      </div>
      <button className="discount__input-button" type="submit">
        Получить скидку
      </button>
      <div className="discount__countdown">
        <Timer />
      </div>
    </form>
  );
}

export default Discount;
