const validationDate = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__text-error_active'
  };

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validationDate.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationDate.errorClass);
  };

  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validationDate.inputErrorClass);
    errorElement.classList.remove(validationDate.errorClass);
    errorElement.textContent = '';
  };


const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {     
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationDate.inputSelector));
    const buttonElement = formElement.querySelector(validationDate.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

  const enableValidation = () => {

    const formList = Array.from(document.querySelectorAll(validationDate.formSelector));
    
    formList.forEach((formElement) => {
        
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
  
      setEventListeners(formElement);
    });
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__btn_disabled');
    } else {
      buttonElement.classList.remove('popup__btn_disabled');
    }
  };
  enableValidation();