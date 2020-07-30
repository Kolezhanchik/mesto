
let edit = document.querySelector('.profile__edit');
let close = document.querySelector('.popup__close');
let save = document.querySelector('.popup__save');
let popup = document.querySelector('.popup');
let popupName = document.querySelector('.popup__name');
let popupRole = document.querySelector('.popup__role');
let profileName = document.querySelector('.profile__name');
let profileRole = document.querySelector('.profile__role');

function openPopup(){
    // popup.style.display = "block";

    popup.classList.remove('popup__none');
    popupName.value = profileName.textContent;
    popupRole.value = profileRole.textContent;

}

function closePopup(){
    popup.classList.add('popup__none');
}

function savePopup(){ 
    popup.classList.add('popup__none');
    profileName.textContent = popupName.value;
    profileRole.textContent = popupRole.value;

}


edit.addEventListener('click', openPopup);
close.addEventListener('click', closePopup);
save.addEventListener('click', savePopup);