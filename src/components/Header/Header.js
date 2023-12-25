import React from "react";
import logo from "../../images/logo.svg";
import whatsapp from "../../images/whatsapp-icon.svg";
import ScrollIntoView from "react-scroll-into-view";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} className="header__logo-image" alt="logo" />
        <div className="header__text-container">
          <p className="header__logo-title">РЕМОНТ</p>
          <p className="header__logo-subtitle">Бытовой техники</p>
        </div>
      </div>
      <div className="header__buttons">
        <div className="header__nav">
          <div className="header__items">
            <ScrollIntoView selector="#steps">
              <div className="header__nav-item">Как мы работаем?</div>
            </ScrollIntoView>
            <ScrollIntoView selector="#steps__question">
              <div className="header__nav-item">Услуги</div>
            </ScrollIntoView>
            <ScrollIntoView selector="#discount">
              <div className="header__nav-item">Скидка</div>
            </ScrollIntoView>
            <ScrollIntoView selector="#reviews">
              <div className="header__nav-item">Отзывы</div>
            </ScrollIntoView>
            <ScrollIntoView selector="#question">
              <div className="header__nav-item">Частые вопросы</div>
            </ScrollIntoView>
          </div>
          <div className="header__description">
            Работаем <span class="colortext">24/7</span> с Пн- Вс
          </div>
        </div>
        <a href="https://api.whatsapp.com/send?phone=79913712791">
          <img src={whatsapp} className="header__button-image" alt="whatsapp" />
        </a>
        <button className="header__button">
          <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
        </button>
      </div>
    </header>
  );
}

export default Header;
