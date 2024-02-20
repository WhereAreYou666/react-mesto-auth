import headerLogo from "../images/Logo.svg";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Логотип" />
      <div className="header__info">
        <span className="header__email">{props.headerContent.email}</span>
        <Link
          to={!props.loggedIn ? props.headerContent.link : ""}
          className={`header__text ${
            props.loggedIn ? "header__text_logged-in" : ""
          }`}
          onClick={props.signOut}
        >
          {props.headerContent.text}
        </Link>
      </div>
    </header>
  );
}