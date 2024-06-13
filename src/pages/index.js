import "../pages/index.css";
// Import Images
import lagodibraies from "../images/lago_di_braies.png";
import lagolouise from "../images/lago_louise.png";
import latemar from "../images/latemar.png";
import montanhascare from "../images/montanhas_care.png";
import parquenacional from "../images/parque_nacional.png";
import valeyosemite from "../images/vale_de_Yosemite.jpg";

// Import Items
import Card from "../components/Card.js";
import FormValidate from "../components/FormValidate.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

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
          popWithImage
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
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: valeyosemite,
  },
  {
    name: "Lago Louise",
    link: lagolouise,
  },
  {
    name: "Montanhas Carecas",
    link: montanhascare,
  },
  {
    name: "Latemar",
    link: latemar,
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: parquenacional,
  },
  {
    name: "Lago di Braies",
    link: lagodibraies,
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
