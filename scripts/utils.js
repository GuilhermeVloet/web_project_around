export function closePop(modal, openModalClass) {
    modal.classList.remove(openModalClass);
  }

export function activeLike(button) {
    if(button.getAttribute("src") == "./images/likeclose.png"){
        return button.setAttribute("src", "./images/like.png")
    }
    button.setAttribute("src", "./images/likeclose.png")
}

export function activeImage(event, title) {
    const popupViewImage = document.querySelector(".modalImage");
    const selectedImage = event.target
    const titleModalImage = document.querySelector(".modalImageTitle")
    const modalImage = document.querySelector(".modalRenderImage")
    modalImage.src = selectedImage.src
    modalImage.alt = selectedImage.alt
    titleModalImage.textContent = title
    popupViewImage.classList.toggle("modal__view-opened");
  }