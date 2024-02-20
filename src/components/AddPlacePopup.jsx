import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  const titleRef = React.useRef();
  const linkRef = React.useRef();

  React.useEffect(() => {
    titleRef.current.value = "";
    linkRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(titleRef.current.value, linkRef.current.value);
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      onClose={props.onClose}
      buttonText="Создать"
    >
      <input
        id="title-input"
        ref={titleRef}
        className="popup__input popup__input_type_title"
        required
        placeholder="Название"
        defaultValue=""
        type="text"
        name="title"
        minLength="2"
        maxLength="30"
      />
      <span className="popup__input-error title-input-error"></span>
      <input
        id="link-input"
        ref={linkRef}
        className="popup__input popup__input_type_link"
        required
        placeholder="Ссылка на картинку"
        defaultValue=""
        type="url"
        name="link"
      />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  );
}