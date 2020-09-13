import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';

import { initialCards } from './units/initialCards.js';
import { data } from './units/formData.js';

// location popup 
const formAdd = document.querySelector('.popup__container_type_add');
const addCard = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup_type_add');
const popupLocationName = document.querySelector('.popup__text_type_location-name');
const popupLocationRef = document.querySelector('.popup__text_type_ref');
// edit profile popup
const formEdit = document.querySelector('.popup__container_type_edit');
const edit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');
const popupName = document.querySelector('.popup__text_type_name');
const popupRole = document.querySelector('.popup__text_type_role');
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');

// initial cards rendering
initialCards.forEach((item) => {
    const card = new Card(item, '#location-card-template');
    const cardElem = card.generateCard();
    document.querySelector('.locations').prepend(cardElem);
});

// new card adding
function saveAddPopup(event) {
    event.preventDefault();

    const obj = {
        name: popupLocationName.value,
        link: popupLocationRef.value,
    }
    const card = new Card(obj, '#location-card-template');
    const cardElem = card.generateCard();
    document.querySelector('.locations').prepend(cardElem);
    removeListeners(popupAdd);
    formAdd.reset();
    formAdd.removeEventListener('submit', saveAddPopup);
}

// create card btn handler
addCard.addEventListener('click', () => {
    formAdd.addEventListener('submit', saveAddPopup);
    openPopup(popupAdd)
});

// edit profile btn handler

function openEditPopup() {
    popupName.value = profileName.textContent;
    popupRole.value = profileRole.textContent;
    openPopup(popupEdit);
    formEdit.addEventListener('submit', saveEditPopup);
}

function saveEditPopup(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileRole.textContent = popupRole.value;
    removeListeners(popupEdit);
    formEdit.removeEventListener('submit', saveEditPopup);
}

edit.addEventListener('click', openEditPopup);

// close/open popups handlers

function removeListeners(modalName) {
    modalName.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
    document.removeEventListener('click', closeByOverlay);
}

function openPopup(modalName) {
    const popupSbmBtn = modalName.querySelector('.popup__btn');
    popupSbmBtn.setAttribute("disabled", "");
    popupSbmBtn.classList.add('popup__btn_disabled');
    modalName.classList.add('popup_opened');
    
    document.addEventListener('keydown', closeByEsc);
    modalName.querySelector('.popup__close').addEventListener('click', closePopup);    
    document.querySelector('.popup_opened').addEventListener('click', closeByOverlay);
}

function closePopup(event) {
    const eventTarget = event.target;
    deleteEventListener(eventTarget);
    removeListeners(eventTarget.closest('.popup'));
}

function deleteEventListener(eventTarget) {
    eventTarget.removeEventListener('click', closePopup);
}

function closeByEsc(event) {
    if (event.keyCode === 27) {
        const popupCurrent = document.querySelector('.popup_opened');
        removeListeners(popupCurrent);
    }
}

function closeByOverlay(event) {
    event.stopPropagation();
    removeListeners(event.target);
}

//forms validation 
const editValidation = new FormValidator(data, '.popup__container_type_edit');
editValidation.enableValidation();

const addValidation = new FormValidator(data, '.popup__container_type_add');
addValidation.enableValidation();