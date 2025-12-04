import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onToggleToRegister }) {
  return (
    <ModalWithForm
      title="Login"
      buttonText="Login"
      toggleText={{
        text: "Don't have an account?",
        linkText: "Register",
      }}
      isOpen={isOpen}
      onClose={onClose}
      onToggle={onToggleToRegister}
    >
      <label className="form__label">
        Email
        <input
          className="form__input"
          type="text"
          placeholder="your.email@example.com"
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
    </ModalWithForm>
  );
}

export default LoginModal;
