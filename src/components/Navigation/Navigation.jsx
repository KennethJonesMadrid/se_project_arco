import "./Navigation.css";

function Navigation({ onLoginClick }) {
  return (
    <div className="navigation__container">
      <p className="navigation__link">Discover</p>
      <button
        onClick={onLoginClick}
        type="button"
        className="navigation__auth-btn"
      >
        Sign In
      </button>
    </div>
  );
}

export default Navigation;
