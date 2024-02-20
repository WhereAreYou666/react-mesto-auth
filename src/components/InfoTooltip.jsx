import React from "react";
import register from "../images/Accept.svg";
import error from "../images/Error.svg";

export default function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          onClick={props.isRegister ? props.postRegister : props.onClose}
          className="popup__close popup__close_edit"
          type="button"
        ></button>
        <div className="register">
          <img
            src={props.isRegister ? register : error}
            className="register__image"
            alt={props.isRegister ? "Успешно" : "Ошибка"}
          />
          <p className="register__response">
            {props.isRegister
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так! Попробуйте ещё раз."}
          </p>
        </div>
      </div>
    </div>
  );
}
