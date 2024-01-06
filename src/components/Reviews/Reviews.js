import React from "react";
import "./Reviews.css";
import Carousel from "../Carousel";

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h3 className="reviews__title">Отзывы наших клиентов</h3>
      <span className="reviews__subtitle">
        Вы можете оставить отзыв, кликнув
        <a
          href="https://api.whatsapp.com/send?phone=79501460196"
          target="blank"
        >
          <span class="reviews__subtitle-colortext"> здесь </span>
        </a>
      </span>
      <Carousel />
    </section>
  );
}

export default Reviews;
