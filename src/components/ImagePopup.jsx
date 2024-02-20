export default function ImagePopup(props) {
  return (
    <div className={`popup popup-image ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_image">
        <button
          className="popup__close popup__close_image"
          type="button"
          onClick={props.onClose}
        ></button>
        <img className="popup__image" src={props.card} alt={props.name} />
        <h4 className="popup__text popup__text_image">{props.name}</h4>
      </div>
    </div>
  );
}