import Popup from "../components/Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }, deleteCard) {
    super(popupSelector);
    this.popup = document.querySelector(popupSelector);
    this._deleteCard = deleteCard;
  }

  open(card) {
    super.open();
    this._card = card;
    this.popup.classList.add("modal__open");
  }

  close() {
    super.close();
    const modalConfirmationClose = this.popup.querySelector(
      ".PopupWithConfirmation__button-close"
    );
    if (modalConfirmationClose) {
      modalConfirmationClose.addEventListener("click", () => this.close());
    }
    modalConfirmationClose.addEventListener("click", (event) => {
      event.target.classList.remove("modal__open");
    });
  }

  setEventListener() {
    const buttonDelete = document.querySelector(
      ".PopupWithConfirmation-container__button"
    );
    buttonDelete.addEventListener("click", () => {
      this._deleteCard(this._card);
      this.close();
    });
  }
}
