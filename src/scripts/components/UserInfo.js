export default class UserInfo {
  constructor(obj) {
    this._name = obj.name;
    this._role = obj.role;
    this._link = obj.link;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._role.textContent,
    };
  }

  setUserAvatar(obj){
    this._link.src = obj.avatar;
  }

  setUserInfo(obj) {
    this._name.textContent = obj.name;
    this._role.textContent = obj.about;
  }
}
