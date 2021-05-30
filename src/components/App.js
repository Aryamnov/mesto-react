import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name={"edit"}
          title={"Редактировать профиль"}
          buttonText={"Сохранить"}
          isOpen={isEditProfilePopupOpen}
          onclose={closeAllPopups}
        >
          <input
            name="name"
            placeholder="Введите имя"
            className="popup__input popup__input_type_name"
            type="text"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="name-error" className="popup__error">
            Нет ошибки
          </span>
          <input
            name="about"
            placeholder="Введите подпись"
            className="popup__input popup__input_type_signature"
            type="text"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="about-error" className="popup__error">
            Нет ошибки
          </span>
        </PopupWithForm>
        <PopupWithForm
          name={"add"}
          title={"Новое место"}
          buttonText={"Создать"}
          isOpen={isAddPlacePopupOpen}
          onclose={closeAllPopups}
        >
          <input
            name="cardname"
            placeholder="Название"
            className="popup__input popup__input_type_nameCard"
            type="text"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="cardname-error" className="popup__error">
            Нет ошибки
          </span>
          <input
            name="adress"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_src"
            type="url"
            required
          />
          <span id="adress-error" className="popup__error">
            Нет ошибки
          </span>
        </PopupWithForm>
        <PopupWithForm
          name={"link"}
          title={"Обновить аватар"}
          buttonText={"Сохранить"}
          isOpen={isEditAvatarPopupOpen}
          onclose={closeAllPopups}
        >
          <input
            name="link"
            placeholder="Ссылка на аватар"
            className="popup__input popup__input_type_src"
            type="url"
            required
          />
          <span id="link-error" className="popup__error">
            Нет ошибки
          </span>
        </PopupWithForm>
        <PopupWithForm name={"delete"} title={"Вы уверены?"}>
          <button
            type="submit"
            className="popup__submit popup__submit_delete"
            aria-label="Удалить."
          >
            Да
          </button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onclose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
