export default class Popup {
    constructor(containerSelector) {
        this._containerSelector = document.querySelector(containerSelector);
    }

    open() {
        this._containerSelector.classList.add('popup_opened');
    }

    close() {
        this._containerSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
        this._containerSelector.querySelector('.popup__close').removeEventListener('click', this.close.bind(this));
        this._containerSelector.removeEventListener('click', this._closeByOverlay.bind(this));
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
        this._containerSelector.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        this._containerSelector.addEventListener('click', this._closeByOverlay.bind(this));
    }
}