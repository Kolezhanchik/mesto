import Popup from './Popup.js';

export default class PopupWithVerification extends Popup {
  constructor({ handleSubmitButton }, containerSelector) {
    super(containerSelector);
    this._handleSubmitButton = handleSubmitButton;
    this._formElement = this._containerElement.querySelector('.popup__form');
    this._submitHandler = this._submitHandler.bind(this);
    this._submitBtn = this._containerElement.querySelector('.popup__btn');
    this._submitBtnText = this._submitBtn.textContent;
  }

  preloader( inProcess, text =  'Cохранение...') {
    if (inProcess) {
      this._submitBtn .textContent = text;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

  _submitHandler(event) {
    event.preventDefault();
    this._handleSubmitButton(this._item);
    this._formElement.removeEventListener('submit', this._submitHandler);
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', this._submitHandler);
  }

  open(item) {
    this._item = item;
    this.setEventListeners();
    super.open();
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
