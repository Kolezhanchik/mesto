
let form = document.querySelector('.popup__container');
let edit = document.querySelector('.profile__edit');
let close = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let popupName = document.querySelector('.popup__text_type_name');
let popupRole = document.querySelector('.popup__text_type_role');
let profileName = document.querySelector('.profile__name');
let profileRole = document.querySelector('.profile__role');


function openPopup(){    
    popupName.value = profileName.textContent;
    popupRole.value = profileRole.textContent;
    popup.classList.remove('popup_hidden');
}

function closePopup(){
    popup.classList.add('popup_hidden');
}

function savePopup(event){ 
    event.preventDefault();    
    profileName.textContent = popupName.value;
    profileRole.textContent = popupRole.value;
    closePopup();
}

edit.addEventListener('click', openPopup);
close.addEventListener('click', closePopup);
form.addEventListener('submit', savePopup);
