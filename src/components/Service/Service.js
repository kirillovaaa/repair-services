import React from "react";
import "./Service.css";
import tools from "../../images/tools.svg";
import shieldwhite from "../../images/shield-white.svg";
import time from "../../images/time.svg";
import humanwhite from "../../images/human-white.svg";

function Service() {
  return (
    <section className="service">
      <h1 className="service__title">Почему нас рекомендуют клиенты?</h1>
      <div className="service__items">
        <div className="service__item">
          <img src={tools} className="service__item-image" alt="tools" />
          <h3 className="service__item-subtitle">
            Опыт работы в сфере ремонта <br className="service__br" />
            более 10 лет
          </h3>
        </div>
        <div className="service__item">
          <img src={shieldwhite} className="service__item-image" alt="shield" />
          <h3 className="service__item-subtitle">
            Даем гарантию на ремонт и <br className="service__br" />
            запчасти
          </h3>
        </div>
        <div className="service__item">
          <img src={time} className="service__item-image" alt="time" />
          <h3 className="service__item-subtitle">
            Выезжаем на дом в течении <br className="service__br" />
            часа после заявки
          </h3>
        </div>
        <div className="service__item">
          <img src={humanwhite} className="service__item-image" alt="humanw" />
          <h3 className="service__item-subtitle">
            Диагностируем и обслуживаем <br className="service__br" />
            даже самые сложные <br className="service__br" />
            неисправности бытовой техники
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Service;
