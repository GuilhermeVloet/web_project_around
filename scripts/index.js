//Botão de Ativar e Fechar
const buttonEditor = document.querySelector(".button__editor")
const modal = document.querySelector(".modal")
function popActive() {
    modal.classList.add("modal__open")
    nomeInput.value = nomePerfil.textContent
    sobreInput.value = sobrePerfil.textContent
}
buttonEditor.addEventListener("click", popActive)

const buttonClose = document.querySelector(".button__close")
function popClose() {
    modal.classList.remove("modal__open")
}
buttonClose.addEventListener("click", popClose)

//Botão de Like
const buttonLikeActive = document.querySelectorAll(".button__like")
function likeActive(button) {
    if(button.getAttribute("src") == "./imagens/likeclose.png"){
        return button.setAttribute("src", "./imagens/like.png")
    }
    button.setAttribute("src", "./imagens/likeclose.png")
}
buttonLikeActive.forEach(button => {
    button.addEventListener("click", () => likeActive(button))
})

//Buscando info pop up Nome
const nomeInput = document.querySelector("#nome")
const nomePerfil = document.querySelector(".title-list")
console.log(nomePerfil.textContent)

//Buscando info pop up Sobre
const sobreInput = document.querySelector("#sobre")
const sobrePerfil = document.querySelector(".subtitle-list")
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
    popClose()
    // Pegue os valores de cada campo do valor da propriedade correspondente

    // Selecione os elementos aos quais os valores dos campos serão inseridos

    // Insira novos valores usando a
    // propriedade textContent
}
const formElement = document.querySelector(".form")
// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit);