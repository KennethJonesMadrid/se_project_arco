import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({
  isOpen,
  onClose,
  onToggleToRegister,
  onLogin,
  authError,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    onLogin({ email, password });

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

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
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
    >
      <label className="form__label">
        Email
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form__input"
          type="text"
          placeholder="your.email@example.com"
        ></input>
      </label>
      <label className="form__label">
        Password
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="••••••••"
          className="form__input"
        ></input>
      </label>
      {authError && <p className="modal__error">{authError}</p>}
    </ModalWithForm>
  );
}

export default LoginModal;
