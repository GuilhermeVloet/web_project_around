import "../pages/index.css";

// Import Items
import Card from "../components/Card.js";
import FormValidate from "../components/FormValidate.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Profile from "../components/Profile.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import like from "../images/like.png";
import likeclose from "../images/likeclose.png";

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

new FormValidate(
  {
    formSelector: ".modal-profile",
    inputSelector: ".modal-profile__link",
    submitButtonSelector: ".modal-profile__button",
    buttonErrorClass: "button__disabled",
    inputErrorClass: "input__error",
    errorSelector: ".modal-profile__span",
  },
  "#modalprofile"
).enableValidation();

let section;
let owner = {};

// Instancia Api
const clientApi = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-11",
  headers: { "Content-Type": "application/json" },
  token: "67303a58-f3ba-41ff-b115-9719ecc2a496",
});

const user = new UserInfo(
  {
    nameSelector: ".profile__title",
    aboutSelector: ".profile__subtitle",
  },
  ".form"
);

const popWithImage = new PopupWithImage(
  ".modal-image",
  document.querySelector(".modal-image__render-image"),
  document.querySelector(".modal-image__image-title")
);
function loadCard() {
  clientApi
    .getInitialCards()
    .then((res) => {
      return res.json();
    })
    .then((cards) => {
      section = new Section(
        {
          items: cards,
          renderer: (card) => {
            const cardItem = new Card(
              card,
              "#template",
              popWithImage,
              likeCard,
              updateLike,
              popupConfirmation
            ).generateCard(owner);
            section.addItem(cardItem);
          },
        },
        ".gallery"
      );
      section.renderItems();
    });
}
popWithImage.setEventListener();
window.addEventListener("load", loadCard);

// Método para carregar informações do usuário
clientApi
  .getUserInfo()
  .then((res) => {
    return res.json();
  })
  .then((profile) => {
    owner = { ...profile };
    user.setUserInfo(owner);
    document.querySelector(".profile__title").textContent = profile.name;
    document.querySelector(".profile__subtitle").textContent = profile.about;
    document
      .querySelector(".profile__foto-perfil")
      .setAttribute("src", profile.avatar);
  })
  .catch((err) => {
    console.log(err);
  });

function deleteCard(card) {
  clientApi
    .deleteCard(card.getAttribute("id"))
    .then(() => {
      popupConfirmation.close();
      card.remove();
    })
    .catch((res) => {
      console.error(res);
    });
}

const popupConfirmation = new PopupWithConfirmation(
  {
    popupSelector: ".PopupWithConfirmation",
  },
  deleteCard
);
popupConfirmation.setEventListener();

function updateLike(cardElement, cardId) {
  const likeNumberSpan = cardElement.querySelector(".gallery__like-number");
  const cards = clientApi.getInitialCards();
  cards
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((element) => {
        if (cardId === element._id) {
          likeNumberSpan.textContent = element.likes.length;
        }
      });
    });
}

function likeCard(cardElement, likeButtonElement, cardId) {
  const likeNumberSpan = cardElement.querySelector(".gallery__like-number");
  const buttonLikeCard = likeButtonElement.getAttribute("src");
  if (buttonLikeCard === like) {
    const setLike = clientApi.setLike(cardId);
    setLike.then((data) => {
      likeNumberSpan.textContent = data.likes.length;
    });
  } else {
    const deleteLike = clientApi.deleteLike(cardId);
    deleteLike.then((data) => {
      likeNumberSpan.textContent = data.likes.length;
    });
  }
  const imageLike = buttonLikeCard === like ? likeclose : like;
  likeButtonElement.setAttribute("src", imageLike);
}

// Profile Perfil Edit
const profileEdit = new Profile(
  {
    popupSelector: ".modal-profile",
  },
  ".profile__foto-perfil",
  ".modal-profile__link",
  ".modal-profile__button"
);
const buttonSave = document.querySelector(".modal-profile__button");
buttonSave.addEventListener("click", () => {
  const avatarUrl = document.querySelector(".modal-profile__link").value;
  clientApi.setEditProfile(avatarUrl);
});

profileEdit.setEventListener();
const buttonProfile = document.querySelector(".profile__foto-perfil");
buttonProfile.addEventListener("click", () => profileEdit.open());

//    //     //    //    //
function setProfileValue() {
  const userValue = user.getUserInfo();
  document.querySelector("#name").value = userValue.name;
  document.querySelector("#about").value = userValue.about;
}

const popupAddCard = new PopupWithForm(
  {
    popSelector: "#addmodal",
    submitCallBack: ({ title, link }) => {
      clientApi.setPostCard({ title, link }).then((card) => {
        section.addItem(
          new Card(
            card,
            "#template",
            popWithImage,
            likeCard,
            updateLike,
            popupConfirmation
          ).generateCard(user.getUserInfo())
        );
      });
    },
  },
  setProfileValue
);
popupAddCard.setEventListeners();
const button = document.querySelector(".profile__button-popup");
button.addEventListener("click", () => popupAddCard.open());

const popupEditProfile = new PopupWithForm(
  {
    popSelector: "#editmodal",
    submitCallBack: ({ name, about }) => {
      const newUserInfo = {
        name,
        about,
      };
      user.setUserInfo(newUserInfo);
      clientApi.setUserInfo(newUserInfo);
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
