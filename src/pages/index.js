import './index.css';

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
function newCardGen(item) {
  const card = new Card({
    handleCardClick: (item) => {
      const popupWithImage = new PopupWithImage('.popup_type_show');
      popupWithImage.open(item);
      popupWithImage.setEventListeners();
    }
  }, item, '#location-card-template');
  return card.generateCard();
}

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(newCardGen(item));
  },
}, '.locations');

cardsList.rendererItems();

// add popup
const addPopup = new PopupWithForm({
  handleSubmitButton: (list) => {
    const obj = {
      name: list.locationName,
      link: list.locationRef,
    }
    cardsList.addNew(newCardGen(obj));
    addPopup.close();
  }
}, '.popup_type_add');

addCard.addEventListener('click', () => {
  addPopup.open();
});

addPopup.setEventListeners();

// edit popup
const formUserInfo =
  new UserInfo({
    name: profileName,
    role: profileRole,
  });

edit.addEventListener('click', () => {
  const obj = formUserInfo.getUserInfo();
  popupName.value = obj.name;
  popupRole.value = obj.role;
  editPopup.open();
});

const editPopup = new PopupWithForm({
  handleSubmitButton: (list) => {
    formUserInfo.setUserInfo(list);
    editPopup.close();
  }
}, '.popup_type_edit');

editPopup.setEventListeners();

//forms validation
const editValidation = new FormValidator(data, '.popup__container_type_edit');
editValidation.enableValidation();

const addValidation = new FormValidator(data, '.popup__container_type_add');
addValidation.enableValidation();
