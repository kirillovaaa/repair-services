import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";
import review1 from "../../images/review-1.png";
import review2 from "../../images/review-2.png";
import review3 from "../../images/review-3.png";
import review4 from "../../images/review-4.png";
import review5 from "../../images/review-5.png";
import review6 from "../../images/review-6.png";
import review8 from "../../images/review-8.png";
import review9 from "../../images/review-9.png";
import review10 from "../../images/review-10.png";
import review11 from "../../images/review-11.png";
import review12 from "../../images/review-12.png";
import review13 from "../../images/review-13.png";
import review14 from "../../images/review-14.png";
import AliceCarousel from "react-alice-carousel";
import "./Carousel.css";

const IMAGES = [
  { key: "review-1", src: review1 },
  { key: "review-2", src: review2 },
  { key: "review-3", src: review3 },
  { key: "review-4", src: review4 },
  { key: "review-5", src: review5 },
  { key: "review-6", src: review6 },
  { key: "review-8", src: review8 },
  { key: "review-9", src: review9 },
  { key: "review-10", src: review10 },
  { key: "review-11", src: review11 },
  { key: "review-12", src: review12 },
  { key: "review-13", src: review13 },
  { key: "review-14", src: review14 },
];

const Carousel = () => {
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
    },
    1440: {
      items: 3,
    },
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = IMAGES.map((item, key) => (
    <div className="carousel-item-container">
      <img
        key={item.key}
        src={item.src}
        data-value={key + 1}
        onDragStart={handleDragStart}
        role="presentation"
        alt="Положительный отзыв покупателя"
      />
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking={true}
      disableButtonsControls={true}
      items={items}
      responsive={responsive}
      keyboardNavigation={true}
      infinite={true}
      controlsStrategy="alternate"
      paddingLeft={15}
      paddingRight={15}
    />
  );
};

export default Carousel;
