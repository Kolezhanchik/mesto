import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(obj,containerSelector){
        super(containerSelector);
        this._link = obj.link;
        this._name = obj.name;
    }

    open(){  
        this._containerSelector.querySelector('.popup__image').src = this._link;
        this._containerSelector.querySelector('.popup__caption').textContent = this._name;  
        super.open();    
        super.setEventListeners();   
    }
}