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
import Successful from "../Successful/Succesful";

const App = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ready | success | error
  const [formState, setFormState] = useState("ready");
  const [isLoadingForm, setIsLoadingForm] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openPopup() {
    setIsOpenPopup(true);
  }

  function closePopup() {
    setIsOpenPopup(false);
    if (formState === "error") {
      setFormState("ready");
    }
  }

  async function handleSubmitRequest(e) {
    // отменяем стандартный переход на адрес формы
    e.preventDefault();

    if (formState === "success") {
      setIsOpenPopup(true);
      return;
    }

    try {
      const { name, phone, message } = e.target.elements;
      setIsLoadingForm(true);
      await fetch("http://localhost:3010/", {
        method: "post",
        mode: "cors",
        body: JSON.stringify({
          name: name.value,
          phone: phone.value,
          message: message.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsOpenPopup(true);
      setFormState("success");
    } catch (e) {
      setFormState("error");
    } finally {
      setIsLoadingForm(false);
    }
  }

  return (
    <main>
      <Header
        isMenuOpen={isMenuOpen}
        onOpenMenu={openMenu}
        onCloseMenu={closeMenu}
      />
      <Promo onClickOpen={openPopup} />
      <Steps onClickOpen={openPopup} />
      <Service />
      <Discount
        onSubmit={handleSubmitRequest}
        showError={formState === "error"}
      />
      <Reviews />
      <Question onClickOpen={openPopup} />

      {formState === "ready" || formState === "error" ? (
        <Popup isOpen={isOpenPopup} onClose={closePopup}>
          <RequestForm
            onSubmit={handleSubmitRequest}
            showLoading={isLoadingForm}
            showError={formState === "error"}
          />
        </Popup>
      ) : formState === "success" ? (
        <Successful isOpen={isOpenPopup} onClose={closePopup} />
      ) : null}

      <SideNav
        isMenuOpen={isMenuOpen}
        onCloseMenu={closeMenu}
        onOpenPopupRequest={openPopup}
      />
    </main>
  );
};

export default App;
