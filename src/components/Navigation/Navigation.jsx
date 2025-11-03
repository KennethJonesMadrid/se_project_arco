import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation__container">
      <p className="navigation__link">Discover</p>
      <button type="button" className="navigation__auth-btn">
        Sign In
      </button>
    </div>
  );
}

export default Navigation;
