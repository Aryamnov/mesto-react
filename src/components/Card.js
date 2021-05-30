import React from "react";

function Card(props) {
  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  return (
    <li className="element">
      <img
        className="element__image"
        alt={props.card.name}
        src={props.card.link}
        onClick={handleCardClick}
      />
      <button className="element__trash-can"></button>
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-block">
          <button
            type="button"
            className="element__like"
            aria-label="Указать, что понравилась фотография."
          ></button>
          <span className="element__like-span">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
