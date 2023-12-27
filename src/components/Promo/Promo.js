import React from "react";
import "./Promo.css";
import shield from "../../images/shield.svg";
import point from "../../images/point.svg";
import key from "../../images/key.svg";
import human from "../../images/human.svg";

function Promo({ onClickOpen }) {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Ремонт, установка и обслуживание <br />
        бытовой техники в Иркутске
      </h1>
      <div className="promo__buttons">
        <button className="promo__button" type="submit" onClick={onClickOpen}>
          Вызвать мастера
        </button>
        <button className="promo__button">
          <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
        </button>
      </div>
      <h2 className="promo__subtitle">
        Устраним любые поломки в короткие сроки по лучшим ценам в городе
      </h2>
      <div className="promo__items">
        <div className="promo__item">
          <img src={shield} className="header__item-image" alt="shield" />
          <p className="promo__item-text">
            Гарантия на работы <br br className="promo__br" />
            до 3 лет
          </p>
        </div>
        <div className="promo__item">
          <img src={point} className="header__item-image" alt="point" />
          <p className="promo__item-text">
            Выезд на дом в <br className="promo__br" /> течении 1 часа
            <br className="promo__br" />
            весь город и прогород
          </p>
        </div>
        <div className="promo__item">
          <img src={key} className="header__item-image" alt="key" />
          <p className="promo__item-text">
            Оригинальные <br br className="promo__br" /> запчасти и аналоги в
            <br br className="promo__br" />
            наличии
          </p>
        </div>
        <div className="promo__item">
          <img src={human} className="header__item-image" alt="human" />
          <p className="promo__item-text">
            Мастера с опытом <br br className="promo__br" />
            работы более 10 лет
          </p>
        </div>
      </div>
    </section>
  );
}

export default Promo;
