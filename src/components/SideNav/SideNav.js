import React from "react";
import "./SideNav.css";
import ScrollIntoView from "react-scroll-into-view";

const SideNav = ({ isMenuOpen, onCloseMenu, onOpenPopupRequest }) => {
  function handlePopupOpen() {
    onCloseMenu();
    onOpenPopupRequest();
  }

  return (
    <div className={`sidenav ${isMenuOpen ? "sidenav_opened" : ""}`}>
      <div className="sidenav__main">
        <div className="sidenav__items">
          <ScrollIntoView selector="#steps" onClick={onCloseMenu}>
            <div className="sidenav__item">Как мы работаем?</div>
          </ScrollIntoView>

          <ScrollIntoView selector="#steps__question" onClick={onCloseMenu}>
            <div className="sidenav__item">Услуги</div>
          </ScrollIntoView>

          <ScrollIntoView selector="#discount" onClick={onCloseMenu}>
            <div className="sidenav__item">Скидка</div>
          </ScrollIntoView>

          <ScrollIntoView selector="#reviews" onClick={onCloseMenu}>
            <div className="sidenav__item">Отзывы</div>
          </ScrollIntoView>

          <ScrollIntoView selector="#question" onClick={onCloseMenu}>
            <div className="sidenav__item">Частые вопросы</div>
          </ScrollIntoView>
        </div>

        <span className="sidenav__description">
          Вызовите мастера <br /> сегодня и получите <br /> скидку 15% за
          скорость <br /> принятия решения <br />
          <span class="underline">8-950-146-0196</span>
        </span>

        <button
          className="sidenav__button"
          type="submit"
          onClick={handlePopupOpen}
        >
          Вызвать мастера
        </button>

        <span className="sidenav__text">
          Работаем <span class="colortext"> 24/7 </span> с Пн- Вс
        </span>
      </div>
    </div>
  );
};

export default SideNav;
