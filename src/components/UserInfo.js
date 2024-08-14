export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
      avatar: this._avatar,
      _id: this._id,
      cohort: this._cohort,
    };
  }

  setUserInfo({ name, about, avatar, _id, cohort }) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
    this._avatar = avatar;
    this._id = _id;
    this._cohort = cohort;
  }
}
