import { profileName, profileRole } from '../units/constants.js';

export default class UserInfo {
    constructor(obj){
        this._name = obj.name;
        this._role = obj.role;
    }

    getUserInfo(){
        return this._obj = {
            name: this._name,
            role: this._role,
        };       
    }

    setUserInfo(obj){
        profileName.textContent = obj.userName;
        profileRole.textContent = obj.userRole;
    }
}