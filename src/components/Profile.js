import Popup from "./Popup.js";

export default class Profile extends Popup {
  constructor({ popupSelector, profileImage }) {
    super(popupSelector);
    // this.profileImage = document.querySelector(profileImage);
    // this.inputElement = document.querySelector(".modal-profile__link");
    // this.buttonSave = document.querySelector(".modal-profile__button");
  }
  open() {
    super.open();
  }

  close() {
    super.close();
  }

  setEventListener() {
    super.setEventListener();
  }
}
