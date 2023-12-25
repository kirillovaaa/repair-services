import React from "react";
import "./Steps.css";
import washingmachine from "../../images/washingmachine.png";
import fridge from "../../images/fridge.png";
import dishwasher from "../../images/dishwasher.png";
import kitchenstove from "../../images/kitchenstove.png";
import oven from "../../images/oven.png";
import coffeemachine from "../../images/coffeemachine.png";

function Steps() {
  return (
    <section className="steps">
      <h1 className="steps__title">
        Как мы работаем: <br className="steps__br" />4 простых шага
      </h1>
      <div className="steps__subtitle-container">
        <h3 className="steps__subtitle-text">
          Сделайте первый шаг. Просто позвоните
        </h3>
        <button className="steps__subtitle-button">
          <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
        </button>
      </div>
      <div className="steps__items">
        <div className="steps__item">
          <span className="steps__item-number">1</span>
          <h2 className="steps__item-title">Сделайте заказ</h2>
          <h3 className="steps__item-subtitle">
            Оставьте заявку. <br />
            По телефону мы узнаем, что <br />
            случилось и скажем <br />
            примерную стоимость
          </h3>
        </div>
        <div className="steps__item">
          <span className="steps__item-number">2</span>
          <h2 className="steps__item-title">Выезд специалиста</h2>
          <h3 className="steps__item-subtitle">
            Мастер выезжает на дом, <br />
            проведет диагностику, чтобы <br />
            определить причину <br />
            поломки и скажет точную <br /> стоимость ремонта
          </h3>
        </div>
        <div className="steps__item">
          <span className="steps__item-number">3</span>
          <h2 className="steps__item-title">Ремонт</h2>
          <h3 className="steps__item-subtitle">
            Если цена устроит, начинаем
            <br />
            ремонт. <br />
            Обычно ремонт занимает от <br />
            30 минут до 4-х часов
          </h3>
        </div>
        <div className="steps__item">
          <span className="steps__item-number">4</span>
          <h2 className="steps__item-title">Проверка</h2>
          <h3 className="steps__item-subtitle">
            После завершения ремонта, <br />
            мастер при Вас убедится, что <br />
            кондиционер работает <br />
            исправно. Выпишет <br /> гарантию
          </h3>
        </div>
      </div>
      <h1 className="steps__question">Что у вас сломалось?</h1>
      <div className="steps__question-items">
        <div className="steps__question-item">
          <img
            src={washingmachine}
            className="steps__question-image"
            alt="washingmachine"
          />
          <h2 className="steps__question-title">
            Ремонт стиральных <br />
            машин
          </h2>
          <h3 className="steps__question-subtitle">
            Что сломалось у Вашей <br className=" steps__media320" />
            стиральной машины? <br className=" steps__media320" />
            Оставьте номер телефона или <br className=" steps__media320" />{" "}
            позвоните
          </h3>
          <div className="steps__question-buttons">
            <button className="steps__question-button">Вызвать мастера</button>
            <button className="steps__question-button">
              <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
            </button>
          </div>
        </div>
        <div className="steps__question-item">
          <img
            src={fridge}
            className="steps__question-image steps__image-fridge"
            alt="fridge"
          />
          <h2 className="steps__question-title">
            Ремонт <br />
            холодильников
          </h2>
          <h3 className="steps__question-subtitle">
            Что сломалось у Вашего <br className=" steps__media320" />
            холодильника? Оставьте <br />
            номер телефона или <br className=" steps__media320" />
            позвоните
          </h3>
          <div className="steps__question-buttons">
            <button className="steps__question-button">Вызвать мастера</button>
            <button className="steps__question-button">
              <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
            </button>
          </div>
        </div>
        <div className="steps__question-item">
          <img
            src={dishwasher}
            className="steps__question-image"
            alt="dishwasher"
          />
          <h2 className="steps__question-title">
            Ремонт посудомоечных <br />
            машин
          </h2>
          <h3 className="steps__question-subtitle">
            Что сломалось у Вашей <br className=" steps__media320" />
            посудомоечной машины? Оставьте <br />
            номер телефона или <br className=" steps__media320" />
            позвоните
          </h3>
          <div className="steps__question-buttons">
            <button className="steps__question-button">Вызвать мастера</button>
            <button className="steps__question-button">
              <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
            </button>
          </div>
        </div>
        <div className="steps__question-item">
          <img
            src={kitchenstove}
            className="steps__question-image"
            alt="kitchenstove"
          />
          <h2 className="steps__question-title">
            Ремонт варочных <br />
            панелей
          </h2>
          <h3 className="steps__question-subtitle">
            Что сломалось у Вашей <br className=" steps__media320" />
            варочной панели? Оставьте <br />
            номер телефона или <br className=" steps__media320" />
            позвоните
          </h3>
          <div className="steps__question-buttons">
            <button className="steps__question-button">Вызвать мастера</button>
            <button className="steps__question-button">
              <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
            </button>
          </div>
        </div>
        <div className="steps__question-item">
          <img src={oven} className="steps__question-image" alt="oven" />
          <h2 className="steps__question-title">
            Ремонт духовых <br />
            шкафов
          </h2>
          <h3 className="steps__question-subtitle">
            Что сломалось у Вашего <br className=" steps__media320" />
            духового шкафа? Оставьте <br />
            номер телефона или <br className=" steps__media320" /> позвоните
          </h3>
          <div className="steps__question-buttons">
            <button className="steps__question-button">Вызвать мастера</button>
            <button className="steps__question-button">
              <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
            </button>
          </div>
        </div>
        <div className="steps__question-item">
          <img
            src={coffeemachine}
            className="steps__question-image"
            alt="coffeemachine"
          />
          <h2 className="steps__question-title">
            Ремонт <br />
            кофемашин
          </h2>
          <h3 className="steps__question-subtitle">
            Что сломалось у Вашей <br className=" steps__media320" />
            кофемашины? Оставьте <br />
            номер телефона или <br className=" steps__media320" />
            позвоните
          </h3>
          <div className="steps__question-buttons">
            <button className="steps__question-button">Вызвать мастера</button>
            <button className="steps__question-button">
              <a href="tel:+7 (950) 146-01-96">8-950-146-0196</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
