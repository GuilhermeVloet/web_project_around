export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popup.classList.add("modal__open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popup.classList.remove("modal__open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListener() {
    const modalCloseButton = this.popup.querySelector(".modal__button-close");
    if (modalCloseButton) {
      modalCloseButton.addEventListener("click", () => this.close());
    }
    const modalImageCloseButton = this.popup.querySelector(
      ".modal-image__button-close"
    );
    if (modalImageCloseButton) {
      modalImageCloseButton.addEventListener("click", () => this.close());
    }
    this.popup.addEventListener("click", (event) => {
      event.target.classList.remove("modal__open");
    });
  }
}
