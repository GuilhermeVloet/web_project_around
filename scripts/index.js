import Card from "./Card.js";
import FormValidate from "./FormValidate.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

new FormValidate(
  {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    buttonErrorClass: "button__disabled",
    inputErrorClass: "input__error",
    errorSelector: ".form__input-message",
  },
  "#addForm"
).enableValidation();

new FormValidate(
  {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    buttonErrorClass: "button__disabled",
    inputErrorClass: "input__error",
    errorSelector: ".form__input-message",
  },
  "#editForm"
).enableValidation();

const user = new UserInfo(
  {
    nameSelector: ".profile__title",
    aboutSelector: ".profile__subtitle",
  },
  ".form"
);

const popupAddCard = new PopupWithForm(
  {
    popSelector: "#addmodal",
    submitCallBack: ({ title, link }) => {
      section.addItem(
        new Card(
          { name: title, link: link },
          "#template",
          activeImage
        ).generateCard()
      );
      popupAddCard.close();
    },
  },
  () => {}
);
popupAddCard.setEventListeners();
const button = document.querySelector(".profile__button-popup");
button.addEventListener("click", () => popupAddCard.open());

function setProfileValue() {
  const userValue = user.getUserInfo();
  document.querySelector("#name").value = userValue.name;
  document.querySelector("#about").value = userValue.about;
}

const popupEditProfile = new PopupWithForm(
  {
    popSelector: "#editmodal",
    submitCallBack: ({ name, about }) => {
      const newUserInfo = {
        name,
        about,
      };
      user.setUserInfo(newUserInfo);
      document.querySelector(".profile__title").textContent = name;
      document.querySelector(".profile__subtitle").textContent = about;
      popupEditProfile.close();
    },
  },
  setProfileValue
);
popupEditProfile.setEventListeners();
const buttonEditor = document.querySelector(".profile__button-editor");
buttonEditor.addEventListener("click", () => popupEditProfile.open());

// Cartões de Imagens (POP-UP LOCAL)
const list = document.querySelector(".gallery");
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const popWithImage = new PopupWithImage(
  ".modalImage",
  document.querySelector(".modalRenderImage"),
  document.querySelector(".modalImageTitle")
);
const section = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      const cardItem = new Card(card, "#template", popWithImage).generateCard();
      section.addItem(cardItem);
    },
  },
  ".gallery"
);
section.renderItems();

popWithImage.setEventListener();
