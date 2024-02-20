import React from "react";

import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const userInfo = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__left-side">
          <div onClick={props.onEditAvatar} className="profile__avatar-box">
            <img
              className="profile__avatar"
              alt="Аватар"
              src={userInfo.avatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__text">{userInfo.name}</h1>
              <button
                onClick={props.onEditProfile}
                className="profile__edit-button"
                type="button"
              ></button>
            </div>
            <p className="profile__status">{userInfo.about}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__button-add-card"
          type="button"
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((item) => {
          return (
            <Card
              onCardClick={props.onCardClick}
              key={item._id}
              item={item}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}