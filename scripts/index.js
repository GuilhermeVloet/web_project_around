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
function closePop() {
    modal.classList.remove("modal__open")
}
buttonClose.addEventListener("click", closePop)

//Botão de Like
const buttonLikeActive = document.querySelectorAll(".gallery__button-like")
function activeLike(button) {
    if(button.getAttribute("src") == "./images/likeclose.png"){
        return button.setAttribute("src", "./images/like.png")
    }
    button.setAttribute("src", "./images/likeclose.png")
}
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
    closePop()
}
const formElement = document.querySelector(".form")
formElement.addEventListener('submit', handleProfileFormSubmit);


// Modal Pop-Up New Local
const button = document.querySelector(".profile__button-popup")
const modalLocal = document.querySelector("#modal")
function activeLocalPop() {
    modalLocal.classList.add("modal__open-local")
    // titleGallery.textContent = titleInput.value
    // imageGallery.textContent = linkInput.value
}
button.addEventListener("click", activeLocalPop)

const buttonLocalClose = document.querySelector("#modal__button-close")
function closeLocalPop() {
    modalLocal.classList.remove("modal__open-local")
}
buttonLocalClose.addEventListener("click", closeLocalPop)

//Buscando info pop up Nome
// const titleInput = document.querySelector("#title")
// const titleGallery = document.querySelector(".gallery__title")
// console.log(titleGallery.textContent)

// //Buscando info pop up Sobre
// const linkInput = document.querySelector("#link")
// const imageGallery = document.querySelector(".gallery__image")
// console.log(imageGallery.textContent)

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


initialCards.forEach(addCard);

function addCard(card){
  const templateContent = document.querySelector("#template").content
  const cards = templateContent.querySelector(".gallery__item").cloneNode(true);
  cards.querySelector(".gallery__title").textContent = card.name
  cards.querySelector(".gallery__image").setAttribute("src", card.link)
  cards.querySelector(".gallery__title").setAttribute("alt", card.name)
  list.append(cards);
}

for (const cartão of initialCards) {
  addCard(cartão)
}

const cartaoNovo = { name: "Guilherme", link: "Link novo" }
addCard(cartaoNovo);

// Pop-up Abrir imagem
const modalOpenImage = document.querySelector(".modal-image");
const closeModalImage = document.querySelector(
  ".modal__close-button"
);