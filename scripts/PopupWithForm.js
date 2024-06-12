import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ submitCallBack, popSelector }, setValues) {
    super(popSelector);
    this._submitCallBack = submitCallBack;
    this._setValue = setValues;
    this._form = this.popup.querySelector(".form");
    this._submitButton = this.popup.querySelector(".form__button");
  }

  _getInputValues() {
    const values = {};
    const inputs = this._form.querySelectorAll(".form__input");
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListener();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallBack(this._getInputValues());
    });
  }

  open() {
    super.open();
    this._setValue();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
