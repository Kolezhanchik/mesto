export default class FormValidator {
    constructor(data, formElement) {
        this._data = data;
        this._formElement = document.querySelector(formElement);
    }

    enableValidation() {

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
        const buttonElement = this._formElement.querySelector(this._data.submitButtonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this.hideInputError(inputElement);
        }
    };

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._data.inactiveButtonClass);
            buttonElement.setAttribute("disabled", "");
        } else {
            buttonElement.classList.remove(this._data.inactiveButtonClass);
            buttonElement.removeAttribute("disabled", "");
        }
    };
    
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._data.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._data.errorClass);
    };

    hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._data.inputErrorClass);
        errorElement.classList.remove(this._data.errorClass);
        errorElement.textContent = '';
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };
}


