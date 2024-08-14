export default class Card {
  constructor(
    cardData,
    templateSelector,
    activeImage,
    likeCard,
    updateLike,
    openPopupConfirmation
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._likes = cardData.likes;
    this._ownerId = cardData.owner._id;
    this._handleCardClick = activeImage;
    this._templateSelector = templateSelector;
    this._likeCard = likeCard;
    this._updateLike = updateLike;
    this._openPopupConfirmation = openPopupConfirmation;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector(".gallery__item");
    const cardElement = template.cloneNode(true);
    return cardElement;
  }

  _setEventListeners(
    cardImage,
    lixeiraElement,
    cardElement,
    likeButtonElement
  ) {
    cardImage.addEventListener("click", (event) =>
      this._handleCardClick.open(event.target.src, this._name)
    );
    lixeiraElement.addEventListener("click", () =>
      this._openPopupConfirmation.open(cardElement)
    );
    likeButtonElement.addEventListener("click", () =>
      this._likeCard(cardElement, likeButtonElement, this._id)
    );
  }

  generateCard(owner) {
    const cardElement = this._getTemplate();
    cardElement.setAttribute("id", this._id);
    cardElement.setAttribute("owner", this._ownerId);
    const titleElement = cardElement.querySelector(".gallery__title");
    titleElement.textContent = this._name;
    const cardImage = cardElement.querySelector(".gallery__image");
    cardImage.setAttribute("src", this._link);
    cardImage.setAttribute("alt", this._name);
    const lixeiraElement = cardElement.querySelector(".gallery__lixeira");
    if (this._ownerId === owner._id) {
      if (lixeiraElement) {
        lixeiraElement.style.display = "flex";
      }
    }
    const likeButtonElement = cardElement.querySelector(
      ".gallery__like-button"
    );
    this._updateLike(cardElement, this._id);
    this._setEventListeners(
      cardImage,
      lixeiraElement,
      cardElement,
      likeButtonElement
    );
    return cardElement;
  }
}
