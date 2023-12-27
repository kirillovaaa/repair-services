import React from "react";
import "./Reviews.css";
import cat from "../../images/cat.jpg";

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h3 className="reviews__title">Отзывы наших клиентов</h3>
      <span className="reviews__subtitle">
        Спросите у наших клиентов, как им понравилось работать с нами. <br />
        Напишите нам на What`s App и мы отправим вам контакты клиентов{" "}
      </span>
      <div className="reviews__container">
        <img src={cat} className="reviews__container-image" alt="" />
        <img src={cat} className="reviews__container-image" alt="" />
        <img src={cat} className="reviews__container-image" alt="" />
      </div>
    </section>
  );
}

export default Reviews;
