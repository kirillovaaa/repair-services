import React from "react";
import "./Steps.css";

function Steps() {
  return (
    <section className="steps">
      <h1 className="steps__title">Как мы работаем: 4 простых шага</h1>
      <div className="steps__subtitle-container">
        <h3 className="steps__subtitle-text">
          Сделайте первый шаг. Просто позвоните
        </h3>
        <button className="steps__subtitle-button">8-950-146-0196</button>
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
    </section>
  );
}

export default Steps;
