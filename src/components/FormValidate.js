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

  _validateButton(submitButton) {
    const form = document.querySelector(this._validator);
    const inputs = Array.from(form.getElementsByTagName("input"));

    const allValid = inputs.every((input) => input.checkValidity());
    if (allValid) {
      submitButton.classList.remove(this._config.buttonErrorClass);
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", true);
      submitButton.classList.add(this._config.buttonErrorClass);
    }
  }

  _setEventListeners(input, submitButton) {
    input.addEventListener("input", () => {
      const isValid = input.checkValidity();
      const errorElement = input.parentNode.querySelector(
        this._config.errorSelector
      );
      if (isValid) {
        this._removeErrorMessage(errorElement);
        this._removeErrorClass(input);
      } else {
        this._addErrorMessage(errorElement, input);
        this._addErrorClass(input);
      }
      this._validateButton(submitButton);
    });
  }

  enableValidation() {
    const form = document.querySelector(this._validator);
    const inputs = Array.from(form.getElementsByTagName("input"));
    const submitButton = form.querySelector(this._config.submitButtonSelector);
    inputs.forEach((input) => {
      this._setEventListeners(input, submitButton);
      this._validateButton(submitButton);
    });

    // submitButton.addEventListener("click", () => {
    //   submitButton.textContent = "Salvando...";
    // });
  }
}
