import "./ModalWithForm.css";
import closeIcon from "../../assets/close-icon.png";

function ModalWithForm({
  title,
  buttonText,
  children,
  toggleText,
  isOpen,
  onClose,
  onToggle,
  onSubmit,
  isFormValid,
}) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose}>
          <img className="modal__close-icon" src={closeIcon} alt="close" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button
            type="submit"
            disabled={!isFormValid}
            className="modal__submit-btn"
          >
            {buttonText}
          </button>
          <div className="modal__auth-link-container">
            <p className="modal__link-text">{toggleText.text}</p>
            <button
              type="button"
              className="modal__auth-btn"
              onClick={onToggle}
            >
              {toggleText.linkText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
