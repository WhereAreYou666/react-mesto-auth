export default function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          onClick={props.onClose}
          className="popup__close popup__close_edit"
          type="button"
        ></button>
        <h3 className="popup__text">{props.title}</h3>
        <form
          className={`popup__form popup__form_${props.name}`}
          name={`popup__form_${props.name}`}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            className="popup__button popup__button_type_active"
            type="submit"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
