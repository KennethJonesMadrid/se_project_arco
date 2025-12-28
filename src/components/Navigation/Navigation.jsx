import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onLoginClick, currentUser, isLoggedIn, onLogout }) {
  return (
    <div className="navigation__container">
      <NavLink to="/" className="navigation__link">
        Discover
      </NavLink>
      {!isLoggedIn ? (
        <button
          onClick={onLoginClick}
          type="button"
          className="navigation__auth-btn"
        >
          Sign In
        </button>
      ) : (
        <>
          <NavLink to="/profile" className="navigation__link">
            Profile
          </NavLink>
          <button
            type="button"
            className="navigation__auth-btn"
            onClick={onLogout}
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}

export default Navigation;
