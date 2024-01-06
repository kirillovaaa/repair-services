import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import whatsapp from "../../images/whatsapp-icon.svg";
import menuIcon from "../../images/menuIcon.svg";
import closeIconWhite from "../../images/close-icon-white.svg";
import ScrollIntoView from "react-scroll-into-view";
import "./Header.css";

function Header({ isMenuOpen, onOpenMenu, onCloseMenu }) {
  return (
    <header className="header" id="header">
      <ScrollIntoView selector="#promo">
        <div className="header__logo-container">
          <img src={logo} className="header__logo-image" alt="logo" />

          <div className="header__text-container">
            <p className="header__logo-title">РЕМОНТ</p>
            <p className="header__logo-subtitle">Бытовой техники</p>
          </div>
        </div>
      </ScrollIntoView>

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
            Работаем <span className="colortext">24/7</span> с Пн- Вс
          </div>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=79501460196"
          target="blank"
        >
          <img src={whatsapp} className="header__button-image" alt="whatsapp" />
        </a>
        <button className="header__button">
          <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
        </button>

        <button
          type="button"
          className="header__menu-button"
          onClick={isMenuOpen ? onCloseMenu : onOpenMenu}
        >
          <img
            className="header__menu-icon"
            src={isMenuOpen ? closeIconWhite : menuIcon}
            alt="Меню"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
