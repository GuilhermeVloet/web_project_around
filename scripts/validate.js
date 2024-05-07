// Validador de formulario
function addErrorMessage(tagElement, input) {
    tagElement.textContent = input.validationMessage
  }
  
  function removeErrorMessage(tagElement) {
    tagElement.textContent = ""
  }
  
  function addErrorClass(input, errorClass) {
    input.classList.add(errorClass)
  }
  
  function removeErrorClass(input, errorClass) {
    input.classList.remove(errorClass)
  }
  
  function validatButton(itens) {
    const totalInputs = itens.allInputs.length
    if (itens.allInputs.filter((i)=> i.validity.valid).length == totalInputs) {
        itens.buttonElement.removeAttribute("disabled", true)
    }else{
        itens.buttonElement.setAttribute("disabled", true)
    }
  }
  
  function validateInputs(input, errorClass) {
    const tagElement = input.nextElementSibling
    if (!input.validity.valid) {
      addErrorMessage(tagElement, input)
      addErrorClass(input, errorClass)
    } else {
      removeErrorMessage(tagElement)
      removeErrorClass(input, errorClass)
    }
  }
  
  function enableValidation(elementos) {
    const forms = Array.from(document.querySelectorAll(elementos.formSelector))
    for (const form of forms) {
      const inputs = Array.from(form.querySelectorAll(elementos.inputSelector))
      const button = form.querySelector(elementos.submitButtonSelector)
      for (const input of inputs) {
        input.addEventListener("input", (event) => {
          const element = event.target
          validateInputs(element, elementos.inputErrorClass)
          validatButton({ 
            buttonElement: button, 
            allInputs: inputs,
            errorClass: elementos.buttonErrorClass
           })
        })
      }
    }
  }
  
  enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    buttonErrorClass: "button__disabled",
    inputErrorClass: "input__error",
  });