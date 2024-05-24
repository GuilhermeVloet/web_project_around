export default class FormValidate {
  constructor(config, validator) {
    this._config = config;
    this._validator = validator;
  }

  _addErrorMessage(errorElement, input) {
    errorElement.textContent = input.validationMessage;
  }

  _removeErrorMessage(errorElement) {
    errorElement.textContent = "";
  }

  _addErrorClass(input) {
    input.classList.add(this._config.inputErrorClass);
  }

  _removeErrorClass(input) {
    input.classList.remove(this._config.inputErrorClass);
  }

  _validateButton(index) {
    const submitButtons = document.querySelectorAll(this._config.submitButtonSelector);
    const form = document.querySelector(this._validator);
    const inputs = Array.from(form.getElementsByTagName("input"));

    const allValid = inputs.every((input) => input.checkValidity());

    if (allValid) {
      submitButtons[index].classList.remove(this._config.buttonErrorClass);
      submitButtons[index].removeAttribute("disabled");
    } else {
      submitButtons[index].setAttribute("disabled", true);
      submitButtons[index].classList.add(this._config.buttonErrorClass);
    }
  }

  _setEventListeners(input, index) {
    input.addEventListener("input", () => {
      const isValid = input.checkValidity();
      const errorElement = input.parentNode.querySelector(this._config.errorSelector);

      if (isValid) {
        this._removeErrorMessage(errorElement);
        this._removeErrorClass(input);
      } else {
        this._addErrorMessage(errorElement, input);
        this._addErrorClass(input);
      }
      this._validateButton(index);
    });
  }

  enableValidation() {
    const form = document.querySelector(this._validator);
    const inputs = Array.from(form.getElementsByTagName("input"));
    const submitButtons = document.querySelectorAll(this._config.submitButtonSelector);

    inputs.forEach((input, index) => {
      this._setEventListeners(input, index);
      this._validateButton(index);
    });
  }
}