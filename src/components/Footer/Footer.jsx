import "./Footer.css";
import LogoBlack from "../../assets/arco-black-logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <img className="footer__logo" src={LogoBlack} alt="Footer logo" />
        <p className="footer__text">
          &copy; 2025 Kenneth Jones. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
