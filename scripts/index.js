
let form = document.querySelector('.popup__container');
let edit = document.querySelector('.profile__edit');
let close = document.querySelector('.popup__close');
let save = document.querySelector('.popup__save');
let popup = document.querySelector('.popup');
let popupName = document.querySelector('.popup__text_name');
let popupRole = document.querySelector('.popup__text_role');
let profileName = document.querySelector('.profile__name');
let profileRole = document.querySelector('.profile__role');


function openPopup(){
    // popup.style.display = "block";
    popup.classList.remove('popup_hidden');
    popupName.value = profileName.textContent;
    popupRole.value = profileRole.textContent;
}

function closePopup(){
    popup.classList.add('popup_hidden');
}

function savePopup(event){ 
    event.preventDefault();
    closePopup();
    profileName.textContent = popupName.value;
    profileRole.textContent = popupRole.value;
}

edit.addEventListener('click', openPopup);
close.addEventListener('click', closePopup);
form.addEventListener('submit', savePopup);
