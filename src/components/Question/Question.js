import React from "react";
import "./Question.css";
import plus from "../../images/plus-icon.svg";

function Question() {
  return (
    <section className="question" id="question">
      <h3 className="question__title">Остались вопросы?</h3>
      <div className="question__container">
        <span className="question__container-subtitle">Звоните</span>
        <button className="question__container-button">
          <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
        </button>
      </div>
      <div className="question__items">
        <div className="question__item">
          <span className="question__item-text">
            Сколько стоит вызвать мастера?
          </span>
          <img className="question__item-image" src={plus} alt="Иконка плюса" />
        </div>
        <div className="question__item">
          <span className="question__item-text">
            Как быстро вы сможете приехать?
          </span>
          <img className="question__item-image" src={plus} alt="Иконка плюса" />
        </div>
        <div className="question__item">
          <span className="question__item-text">Даете ли вы гарантию?</span>
          <img className="question__item-image" src={plus} alt="Иконка плюса" />
        </div>
        <div className="question__item">
          <span className="question__item-text">
            Какие поломки можно отремонтировать самостоятельно?
          </span>
          <img className="question__item-image" src={plus} alt="Иконка плюса" />
        </div>
        <div className="question__item">
          <span className="question__item-text">
            Всегда ли эффективно проводить ремонт или выгоднее купить новую
            бытовую технику?
          </span>
          <img className="question__item-image" src={plus} alt="Иконка плюса" />
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=79913712791" target="blank">
        <button className="question__button">Задать вопрос</button>
      </a>
    </section>
  );
}

export default Question;
