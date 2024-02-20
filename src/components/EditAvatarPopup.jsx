import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      onClose={props.onClose}
      buttonText="Сохранить"
    >
      <input
        id="link-input-avatar"
        ref={avatarRef}
        className="popup__input popup__input_type_link"
        required
        placeholder="Ссылка на изображение"
        defaultValue=""
        type="url"
        name="link"
      />
      <span className="popup__input-error link-input-avatar-error"></span>
    </PopupWithForm>
  );
}