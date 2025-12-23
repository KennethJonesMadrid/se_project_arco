import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onToggleToLogin, onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isPasswordConfirmed = password === confirmPassword;

  const isFormValid = name && email && password && isPasswordConfirmed;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    onRegister({ name, email });

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }, [isOpen]);

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
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
    >
      <label className="form__label">
        Name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          className="form__input"
        ></input>
      </label>
      <label className="form__label">
        Email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your Email"
          className="form__input"
        ></input>
      </label>
      <label className="form__label">
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="••••••••"
          className="form__input"
        ></input>
      </label>
      <label className="form__label">
        Confirm Password
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="••••••••"
          className="form__input"
        ></input>
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
