import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onToggleToLogin }) {
  return (
    <ModalWithForm
      title="Register"
      buttonText="Register"
      isOpen={isOpen}
      onClose={onClose}
      onToggle={onToggleToLogin}
      toggleText={{
        text: "Already have an account?",
        linkText: "Login",
      }}
    >
      <label className="form__label">
        Name
        <input
          type="text"
          placeholder="Your Name"
          className="form__input"
        ></input>
      </label>
      <label className="form__label">
        Email
        <input
          type="email"
          placeholder="Your Email"
          className="form__input"
        ></input>
      </label>
      <label className="form__label">
        Password
        <input
          type="text"
          placeholder="••••••••"
          className="form__input"
        ></input>
      </label>
      <label className="form__label">
        Confirm Password
        <input
          type="text"
          placeholder="••••••••"
          className="form__input"
        ></input>
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
