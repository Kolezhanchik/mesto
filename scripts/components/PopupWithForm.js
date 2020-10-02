import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ handleSubmitButton }, containerSelector) {
        super(containerSelector);
        this._handleSubmitButton = handleSubmitButton;
    }

    _getInputValues() {
        this._formSelector = this._containerSelector.querySelector('.popup__form');
        this._inputsList = this._formSelector.querySelectorAll('.popup__text');
        this._inputsValues = {};
        this._inputsList.forEach(input => this._inputsValues[input.name] = input.value);
        return this._inputsValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._containerSelector.querySelector('.popup__form').addEventListener('submit', (event) => this._handleSubmitButton(event, this._getInputValues()));
    }

    close() {
        super.close();
        this._containerSelector.querySelector('.popup__form').reset();
        this._containerSelector.querySelector('.popup__form').removeEventListener('submit', this._handleSubmitButton.bind(this));
    }
}
