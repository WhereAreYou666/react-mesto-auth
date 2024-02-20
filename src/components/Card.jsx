import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
  const userInfo = React.useContext(CurrentUserContext);
  const isOwn = props.item.owner._id === userInfo._id;
  const isLiked = props.item.likes.some((i) => i._id === userInfo._id);

  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  function handleClick() {
    props.onCardClick(props.item.link, props.item.name);
  }

  function handleCardLike() {
    props.onCardLike(props.item);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.item);
  }

  return (
    <div className="element">
      {isOwn && (
        <button className="element__trash" onClick={handleDeleteClick} />
      )}
      <img
        className="element__image"
        src={props.item.link}
        alt={props.item.name}
        onClick={handleClick}
      />
      <div className="element__signature">
        <h2 className="element__name">{props.item.name}</h2>
        <div className="element__likebox">
          <button
            className={cardLikeButtonClassName}
            onClick={handleCardLike}
            type="button"
          ></button>
          <p className="element__like-counter">{props.item.likes.length}</p>
        </div>
      </div>
    </div>
  );
}