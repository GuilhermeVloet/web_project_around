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
}
button.addEventListener("click", activeLocalPop)

const buttonLocalClose = document.querySelector("#modal__button-close")
function closeLocalPop() {
    modalLocal.classList.remove("modal__open-local")
}
buttonLocalClose.addEventListener("click", closeLocalPop)

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

  function renderCard(card) {
    const template = document
      .querySelector("#template")
      .content.querySelector(".gallery__item");
    const CardAtual = template.cloneNode(true);
    CardAtual.querySelector(".gallery__title").textContent = card.name;
    CardAtual
      .querySelector(".gallery__image")
      .setAttribute("src", card.link);
    CardAtual
      .querySelector(".gallery__image")
      .setAttribute("alt", card.name);
    CardAtual
      .querySelector(".gallery__lixeira")
      .addEventListener("click", (evt) => {
        const elements = document.querySelector(".gallery");
        const card = evt.target.offsetParent;
        elements.removeChild(card);
      });
    CardAtual
      .querySelector(".gallery__button-like")
      .addEventListener("click", (evt) => {
        if (evt.target.getAttribute("src") === "./images/like.png") {
          return evt.target.setAttribute(
            "src",
            "./images/likeclose.png"
          );
        }
        return evt.target.setAttribute("src", "./images/like.png");
      });
    return CardAtual;
  }
  const elements = document.querySelector(".gallery");
  initialCards.forEach((card, index) => {
    const cardItem = renderCard(card);
    elements.append(cardItem);
  });

  const buttonAdd = document.querySelector("#formadd")
  function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const cardName = document.querySelector("#title")
    const cardLink = document.querySelector("#link")
    elements.append(renderCard({name: cardName.value, link: cardLink.value}))
    cardName.value = ""
    cardLink.value = ""
    closeLocalPop()
}
  const formAdd = document.querySelector("#addForm")
  console.log(formAdd)
  formAdd.addEventListener('submit', handleCardFormSubmit);

  //Abrir imagem
  const popupViewImage = document.querySelector(".modal__image");
  const closePopupViewImageButton = document.querySelector(
    ".modal__close-button"
  );
  function activeImage(openImage) {

  }
  popupViewImage.addEventListener("click", activeImage)
  