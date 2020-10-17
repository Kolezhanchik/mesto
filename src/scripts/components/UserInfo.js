export default class UserInfo {
  constructor(obj) {
    this._name = obj.name;
    this._role = obj.role;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._role.textContent,
    };
  }

  setUserInfo(obj) {
    this._name.textContent = obj.name;
    this._role.textContent = obj.about;
  }
}
