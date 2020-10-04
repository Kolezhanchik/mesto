import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ handleSubmitButton }, containerSelector) {
        super(containerSelector);
        this._handleSubmitButton = handleSubmitButton;
        this._setValues = this._setValues.bind(this);
    }

    _getInputValues() {
        this._formSelector = this._containerSelector.querySelector('.popup__form');
        this._inputsList = this._formSelector.querySelectorAll('.popup__text');
        this._inputsValues = {};
        this._inputsList.forEach(input => this._inputsValues[input.name] = input.value);
        return this._inputsValues;
    }

    _setValues(event) {
        event.preventDefault();
        this._handleSubmitButton(this._getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._containerSelector.querySelector('.popup__form').addEventListener('submit', this._setValues);
    }

    close() {
        super.close();
        this._containerSelector.querySelector('.popup__form').reset();
        this._containerSelector.querySelector('.popup__form').removeEventListener('submit', this._setValues);
    }
}
