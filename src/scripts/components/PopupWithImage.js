import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(containerSelector) {
    super(containerSelector);
    this._containerImg = this._containerElement.querySelector('.popup__image');
    this._containerCaption = this._containerElement.querySelector('.popup__caption');
  }

  open(obj) {
    this._containerImg.src = obj.link;
    this._containerCaption.textContent = obj.name;
    super.open();
  }
}
