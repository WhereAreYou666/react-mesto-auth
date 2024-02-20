import React from "react";
import { useNavigate } from "react-router-dom";
import * as Auth from "../utils/Auth";

export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  React.useEffect(() => {
    props.setHeaderContent({
      text: "Регистрация",
      link: "/sign-up",
      email: "",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    Auth.authorize(password, email)
      .then((data) => {
        if (data.token) {
          setEmail("");
          setPassword("");
          props.setHeaderContent({ text: "Выйти", link: "", email: email });
          props.setLoggedIn(true);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="auth">
      <h1 className="auth__header">Вход</h1>
      <form
        className="auth__form"
        name="auth__form_sign-in"
        onSubmit={handleSubmit}
      >
        <input
          id="email-input"
          className="auth__input"
          value={email || ""}
          onChange={handleChangeEmail}
          placeholder="Email"
          type="email"
          name="sign-in-email"
          required
        />
        <span className="auth__input-error name-input-error"></span>
        <input
          id="password-input"
          className="auth__input"
          value={password || ""}
          onChange={handleChangePassword}
          placeholder="Пароль"
          type="password"
          name="sign-in-password"
          required
        />
        <span className="auth__input-error status-input-error"></span>
        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>
    </main>
  );
}
