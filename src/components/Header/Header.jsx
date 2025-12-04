import "./Header.css";
import logo from "../../assets/arco-header-logo.png";
import Navigation from "../Navigation/Navigation";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Arco logo" />
      <Navigation onLoginClick={onLoginClick} />
    </header>
  );
}

export default Header;
