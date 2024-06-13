import like from "../images/like.png";
import likeclose from "../images/likeclose.png";

export default class Card {
  constructor(cardData, templateSelector, activeImage) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._handleCardClick = activeImage;
    this._templateSelector = templateSelector;
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
    lixeiraElement.addEventListener("click", () => {
      const galleryElement = document.querySelector(".gallery");
      galleryElement.removeChild(cardElement);
    });
    likeButtonElement.addEventListener("click", () => {
      const buttonLikeCard = likeButtonElement.getAttribute("src");
      const imageLike = buttonLikeCard === like ? likeclose : like;
      likeButtonElement.setAttribute("src", imageLike);
    });
  }

  generateCard() {
    const cardElement = this._getTemplate();
    const titleElement = cardElement.querySelector(".gallery__title");
    titleElement.textContent = this._name;
    const cardImage = cardElement.querySelector(".gallery__image");
    cardImage.setAttribute("src", this._link);
    cardImage.setAttribute("alt", this._name);
    const lixeiraElement = cardElement.querySelector(".gallery__lixeira");
    const likeButtonElement = cardElement.querySelector(
      ".gallery__button-like"
    );
    this._setEventListeners(
      cardImage,
      lixeiraElement,
      cardElement,
      likeButtonElement
    );
    return cardElement;
  }
}
