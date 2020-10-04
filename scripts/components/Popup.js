export default class Popup {
    constructor(containerSelector) {
        this._containerSelector = document.querySelector(containerSelector);
    }

    open() {
        this._containerSelector.classList.add('popup_opened');
    }

    close() {
        this._containerSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._containerSelector.querySelector('.popup__close').removeEventListener('click', this.close);
        this._containerSelector.removeEventListener('click', this._closeByOverlay);
    }

    _handleEscClose(event) {
        if (event.keyCode === 27) {
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
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeByOverlay = this._closeByOverlay.bind(this);
        this._containerSelector.querySelector('.popup__close').addEventListener('click', this.close);
        document.addEventListener('keydown', this._handleEscClose);
        this._containerSelector.addEventListener('click', this._closeByOverlay);
    }
}