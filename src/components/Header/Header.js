import React from "react";
import logo from "../../images/logo.svg";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} className="header__logo-image" alt="logo" />
        <div className="header__text-container">
          <div className="header__logo-title">РЕМОНТ</div>
          <div className="header__logo-subtitle">Бытовой техники</div>
        </div>
      </div>
      <div className="header__nav">
        <div className="header__items">
          <div className="header__nav-item">Главная</div>
          <div className="header__nav-item">Преимущества</div>
          <div className="header__nav-item">Неисправности</div>
          <div className="header__nav-item">Как мы работаем</div>
          <div className="header__nav-item">Отзывы</div>
          <div className="header__nav-item">Вопросы</div>
        </div>
        <div className="header__description">
          Работаем <span class="colortext">24/7</span> с Пн- Вс
        </div>
      </div>
      <button className="header__button">
        <a href="tel:+7 (950) 146-01-96">8-950-146-01-96</a>
      </button>
    </header>
  );
}

export default Header;
