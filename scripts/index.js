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
    // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
    // Explicaremos em mais detalhes posteriormente.

    // Vamos encontrar os campos de formulário do DOM
    nomePerfil.textContent = nomeInput.value
    sobrePerfil.textContent = sobreInput.value
    closePop()
    // Pegue os valores de cada campo do valor da propriedade correspondente

    // Selecione os elementos aos quais os valores dos campos serão inseridos

    // Insira novos valores usando a
    // propriedade textContent
}
const formElement = document.querySelector(".form")
// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit);

// Modal Pop-Up New Local
