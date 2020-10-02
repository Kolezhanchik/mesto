import { profileName, profileRole } from './units/constants.js';

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

    setUserInfo(){
        profileName.value = this._name;
        profileRole.value = this._role;
    }
}