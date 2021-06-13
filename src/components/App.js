import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cardsArray, userData]) => {
        setCards(cardsArray);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
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

  const handleUpdateUser = (info) => {
    api.setUserInfo(info.name, info.about).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    });
  };

  const handleUpdateAvatar = (info) => {
    api.newAvatar(info.link).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    });
  };

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    // Отправляем запрос в API и удаляем карточку
    api.deleteCard(card._id).then((data) => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    });
  }

  function handleAddPlaceSubmit(card) {
    console.log(card);
    // Отправляем запрос в API и удаляем карточку
    api.addNewCard(card).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
