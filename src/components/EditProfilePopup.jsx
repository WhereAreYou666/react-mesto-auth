import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
    >
      <input
        id="name-input"
        className="popup__input popup__input_type_name"
        value={name || ""}
        onChange={handleChangeName}
        placeholder="Имя"
        type="text"
        name="name"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error name-input-error"></span>
      <input
        id="status-input"
        className="popup__input popup__input_type_status"
        value={description || ""}
        onChange={handleChangeDescription}
        placeholder="Статус"
        type="text"
        name="about"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error status-input-error"></span>
    </PopupWithForm>
  );
}