import React, { useState } from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Steps from "../Steps/Steps";
import Service from "../Service/Service";
import Discount from "../Discount/Discount";
import Reviews from "../Reviews/Reviews";
import Question from "../Question/Question";
import Popup from "../Popup/Popup";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <main>
      <Header />
      <Promo onClickOpen={openPopup} />
      <Steps onClickOpen={openPopup} />
      <Service />
      <Discount />
      <Reviews />
      <Question />
      <Popup isOpen={isOpen} onClose={closePopup} />
    </main>
  );
};

export default App;
