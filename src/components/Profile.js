import Popup from "./Popup.js";

export default class Profile extends Popup {
  constructor({ popupSelector }, profileImage, inputValue, buttonSave) {
    super(popupSelector);
    this.profileImage = profileImage;
    this.inputElement = inputValue;
    this.buttonSave = buttonSave;
  }

  open() {
    super.open();
  }

  close() {
    super.close();
  }

  setEventListener() {
    const modalProfileClose = this.popup.querySelector(
      ".modal-profile__button-close"
    );
    if (modalProfileClose) {
      modalProfileClose.addEventListener("click", () => this.close());
    }
    this.popup.addEventListener("click", (event) => {
      event.target.classList.remove("modal__open");
    });
    const value = document.querySelector(this.profileImage);
    const penilEditor = document.querySelector(".profile__foto-pencil");
    value.addEventListener("mouseenter", () => {
      penilEditor.classList.add("profile__foto-pencil-open");
    });
    value.addEventListener("mouseleave", () => {
      penilEditor.classList.remove("profile__foto-pencil-open");
    });
    document
      .querySelector(this.buttonSave)
      .addEventListener("click", (event) => {
        event.preventDefault();
        value.src = document.querySelector(this.inputElement).value;
        this.close();
      });
  }
}
