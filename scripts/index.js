import Card from "./Card.js";
import FormValidate from "./FormValidate.js";
import {closePop, activeLike, activeImage} from "./utils.js";

new FormValidate({    
formSelector: ".form",
inputSelector: ".form__input",
submitButtonSelector: ".form__button",
buttonErrorClass: "button__disabled",
inputErrorClass: "input__error",
errorSelector: ".form__input-message"
},"#addForm").enableValidation();

new FormValidate({    
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  buttonErrorClass: "button__disabled",
  inputErrorClass: "input__error",
  errorSelector: ".form__input-message"
  },".form").enableValidation();

// Modal Pop-Up (POP-UP NAME)
//Botão de Ativar e Fechar
const buttonEditor = document.querySelector(".profile__button-editor")
const modal = document.querySelector(".modal")
function activePop() {
    modal.classList.add("modal__open")
    nomeInput.value = nomePerfil.textContent
    sobreInput.value = sobrePerfil.textContent
}
buttonEditor.addEventListener("click", activePop)

const buttonClose = document.querySelector(".modal__button-close")
buttonClose.addEventListener("click", function() {
  closePop(modal, "modal__open");
});

//Botão de Like
const buttonLikeActive = document.querySelectorAll(".gallery__button-like")
buttonLikeActive.forEach(button => {
    button.addEventListener("click", () => activeLike(button))
})

//Buscando info pop up Nome
const nomeInput = document.querySelector("#nome")
const nomePerfil = document.querySelector(".profile__title")
console.log(nomePerfil.textContent)

//Buscando info pop up Sobre
const sobreInput = document.querySelector("#sobre")
const sobrePerfil = document.querySelector(".profile__subtitle")
console.log(sobrePerfil.textContent)

//Botão de enviar
const buttonSalvar = document.querySelector(".form__input")
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    nomePerfil.textContent = nomeInput.value
    sobrePerfil.textContent = sobreInput.value
    closePop(modal, "modal__open")
}
const formElement = document.querySelector(".form")
formElement.addEventListener('submit', handleProfileFormSubmit);


// Modal Pop-Up New Local
const button = document.querySelector(".profile__button-popup")
const modalLocal = document.querySelector("#modal")
function activeLocalPop() {
    modalLocal.classList.add("modal__open-local")
}
button.addEventListener("click", activeLocalPop)

const buttonLocalClose = document.querySelector("#modalclose")
function closePopLocal() {
    modalLocal.classList.remove("modal__open-local")
}
buttonLocalClose.addEventListener("click", closePopLocal)

// Cartões de Imagens (POP-UP LOCAL)
const list = document.querySelector(".gallery")
const initialCards = [
    {
      name: "Vale de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Montanhas Carecas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Parque Nacional da Vanoise ",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ];
  
  const galleryElement = document.querySelector(".gallery");
  initialCards.forEach(card => {
    const cardItem = new Card(card, "#template", activeImage).generateCard();
    galleryElement.append(cardItem);
  });
  
  const formAdd = document.querySelector("#addForm");
  formAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardName = document.querySelector("#title");
    const cardLink = document.querySelector("#link");
    galleryElement.prepend(new Card({ name: cardName.value, link: cardLink.value },"#template", activeImage).generateCard());
    cardName.value = "";
    cardLink.value = "";
    closePop(modalLocal, "modal__open-local");
  });

  //Abrir pop-up imagem
  const popupViewImage = document.querySelector(".modalImage");
  const closePopupViewImageButton = document.querySelector(
    ".modalbButtonClose");

  closePopupViewImageButton.addEventListener("click", ()=>
  popupViewImage.classList.toggle("modal__view-opened"));

// Fechar Teclado e click
document.onkeydown = (event) => {
  if (event.key == "Escape") {
    closePop(modal, "modal__open");
    closePop(modalLocal, "modal__open-local");
    closePop(popupViewImage, "modal__view-opened");
  }
}

modal.addEventListener("click", function(event) {
  if (event.target == event.currentTarget) {
    closePop(modal, "modal__open");
  }
});

modalLocal.addEventListener("click", function(event) {
  if (event.target == event.currentTarget) {
    closePop(modalLocal, "modal__open-local");
    closePop(popupViewImage, "modal__view-opened");
  }
});

popupViewImage.addEventListener("click", function(event) {
  if (event.target == event.currentTarget) {
    closePop(popupViewImage, "modal__view-opened");
  }
});