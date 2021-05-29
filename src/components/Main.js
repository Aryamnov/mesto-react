import React from "react";
import Card from "./Card";
import api from "../utils/Api";
import pen from "../images/pen.svg";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cardsArray, userData]) => {
        setCards(cardsArray);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-block">
          <img src={pen} alt="Аватарка." className="profile__avatar-edit" />
          <img
            src={userAvatar}
            alt="Аватарка."
            className="profile__avatar"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__title-button">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__button-edit"
              aria-label="Редактировать профиль."
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__button-add"
          aria-label="Добавить фотографии."
          onClick={onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
