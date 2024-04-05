//Botão de Ativar e Fechar
const buttonEditor = document.querySelector(".button__editor")
const modal = document.querySelector(".modal")
function popActive() {
    modal.classList.add("modal__open")
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