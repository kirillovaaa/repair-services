import React, { useState } from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Steps from "../Steps/Steps";
import Service from "../Service/Service";
import Discount from "../Discount/Discount";
import Reviews from "../Reviews/Reviews";
import Question from "../Question/Question";
import Popup from "../Popup/Popup";
import RequestForm from "../../forms/RequestForm";
import SideNav from "../SideNav/SideNav";

const App = () => {
  const [isOpenRequest, setIsOpenRequest] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openPopupRequest() {
    setIsOpenRequest(true);
  }

  function closePopups() {
    setIsOpenRequest(false);
  }

  function handleSubmitRequest(e) {
    // отменяем стандартный переход на адрес формы
    e.preventDefault();
  }

  return (
    <main>
      <Header
        isMenuOpen={isMenuOpen}
        onOpenMenu={openMenu}
        onCloseMenu={closeMenu}
      />
      <Promo onClickOpen={openPopupRequest} />
      <Steps onClickOpen={openPopupRequest} />
      <Service />
      <Discount />
      <Reviews />
      <Question onClickOpen={openPopupRequest} />

      <Popup isOpen={isOpenRequest} onClose={closePopups}>
        <RequestForm onSubmit={handleSubmitRequest} />
      </Popup>

      <SideNav
        isMenuOpen={isMenuOpen}
        onCloseMenu={closeMenu}
        onOpenPopupRequest={openPopupRequest}
      />
    </main>
  );
};

export default App;
