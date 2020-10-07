export default class Popup {
  constructor(containerSelector) {
    this._containerElement = document.querySelector(containerSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeByOverlay = this._closeByOverlay.bind(this);
  }

  open() {
    this._containerElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);

  }

  close() {
    this._containerElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  _closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this.close = this.close.bind(this);
    this._containerElement.addEventListener('click', this._closeByOverlay);
    this._containerElement.querySelector('.popup__close').addEventListener('click', this.close);
  }
}
