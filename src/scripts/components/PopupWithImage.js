import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(containerSelector){
        super(containerSelector);
    }

    open(obj){
        this._containerSelector.querySelector('.popup__image').src = obj.link;
        this._containerSelector.querySelector('.popup__caption').textContent = obj.name;
        super.open();
        super.setEventListeners();
    }
}
