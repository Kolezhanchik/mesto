export default class Popup {
  constructor(containerSelector) {
    this._containerElement = document.querySelector(containerSelector);
  }

  open() {
    this._containerElement.classList.add('popup_opened');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeByOverlay = this._closeByOverlay.bind(this);
    document.addEventListener('keydown', this._handleEscClose);
    this._containerElement.addEventListener('click', this._closeByOverlay);
  }

  close() {
    this._containerElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._containerElement.removeEventListener('click', this._closeByOverlay);
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
    this._containerElement.querySelector('.popup__close').addEventListener('click', this.close);
  }
}
