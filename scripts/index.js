// Modal Pop-Up (Name)
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
const  buttonCriar = document.querySelector(".profile__button-popup")
const modalLocal = document.querySelector(".modal-newlocal")
function activeLocalPop() {
    modal.classList.add("modal__open-local")
}
buttonCriar.addEventListener("click", activeLocalPop)

const buttonLocalClose = document.querySelector(".modal__button-close")
function closeLocalPop() {
    modalLocal.classList.remove("modal__open-local")
}
buttonLocalClose.addEventListener("click", closeLocalPop)

//Buscando info pop up Nome
const titleInput = document.querySelector("#title")
console.log(titleInput.textContent)

//Buscando info pop up Sobre
const linkInput = document.querySelector("#link")
console.log(linkInput.textContent)