import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import FormValidator from '../scripts/components/FormValidator.js';
import UserInfo from '../scripts/components/UserInfo.js';

import {
    profileName,
    profileRole,
    addCard,
    edit,
    popupName,
    popupRole,
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
addCard.addEventListener('click', () => {
    addValidation.enableValidation();
    const addPopup = new PopupWithForm({
        handleSubmitButton: (list) => {
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
    addPopup.setEventListeners();
    addPopup.open();
});

// edit popup
edit.addEventListener('click', () => {
    editValidation.enableValidation();
    const formUserInfo = new UserInfo({ name: profileName.textContent, role: profileRole.textContent });
    const obj = formUserInfo.getUserInfo();

    const editPopup = new PopupWithForm({
        handleSubmitButton: (list) => {
            formUserInfo.setUserInfo(list);
            editPopup.close();
        }
    }, '.popup_type_edit');

    popupName.value = obj.name;
    popupRole.value = obj.role;
    editPopup.setEventListeners();
    editPopup.open();
});


//forms validation 
const editValidation = new FormValidator(data, '.popup__container_type_edit');


const addValidation = new FormValidator(data, '.popup__container_type_add');
