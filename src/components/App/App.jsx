import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import WorkDetailModal from "../WorkDetailModal/WorkDetailModal";
import { mockWorks } from "../../utils/mockData";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleWorkCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("workDetail");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setSelectedCard(null);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);

    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal, closeActiveModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header onLoginClick={handleLoginClick} />
        <Hero />
        <Main onWorkClick={handleWorkCardClick} />
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeActiveModal}
        onToggleToRegister={handleRegisterClick}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
        onToggleToLogin={handleLoginClick}
      />
      <WorkDetailModal
        isOpen={activeModal === "workDetail"}
        onClose={closeActiveModal}
        work={selectedCard}
      />
    </div>
  );
}

export default App;
