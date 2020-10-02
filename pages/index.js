import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import FormValidator from '../scripts/components/FormValidator.js';

import {
    profileName,
    profileRole,
    addCard,
    edit,
} from '../scripts/units/constants.js';

import { initialCards } from '../scripts/units/initialCards.js';
import { data } from '../scripts/units/formData.js';

// cards rendering
const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card({
            handleCardClick: (item) => {
                const popupWithImage = new PopupWithImage(item, '.popup_type_show');
                popupWithImage.open();
            }
        }, item, '#location-card-template');
        const cardElem = card.generateCard();
        cardsList.addItem(cardElem);
    },
}, '.locations');

cardsList.rendererItems();

// add popup
const addPopup = new PopupWithForm({
    handleSubmitButton: (event, list) => {
        event.preventDefault();
        const obj = {
            name: list.locationName,
            link: list.locationRef,
        }
        const card = new Card({
            handleCardClick: (obj) => {
                const popupWithImage = new PopupWithImage(obj, '.popup_type_show');
                popupWithImage.open();
            }
        }, obj, '#location-card-template');
        document.querySelector('.locations').prepend(card.generateCard());
        addPopup.close();
    }
}, '.popup_type_add');

addCard.addEventListener('click', () => {
    addPopup.setEventListeners();
    addPopup.open();
});

// edit popup
const editPopup = new PopupWithForm({
    handleSubmitButton: (event, list) => {
        event.preventDefault();
        profileName.textContent = list.userName;
        profileRole.textContent = list.userRole;
        editPopup.close();
    }
}, '.popup_type_edit');

edit.addEventListener('click', () => {
    editPopup.setEventListeners();
    editPopup.open();
});

//forms validation 
const editValidation = new FormValidator(data, '.popup__container_type_edit');
editValidation.enableValidation();

const addValidation = new FormValidator(data, '.popup__container_type_add');
addValidation.enableValidation();