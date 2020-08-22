// location popup 
const cardTemplate = document.querySelector('#location-card-template').content;
const formAdd = document.querySelector('.popup__container_type_add');
const locationsContainer = document.querySelector('.locations');
const addCard = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup_type_add');
const popupLocationName = document.querySelector('.popup__text_type_location-name');
const popupLocationRef = document.querySelector('.popup__text_type_ref');
const closeAdd = document.querySelector('.popup__close_location-add');
const popupImage = document.querySelector('.popup_type_show');
const closeImage = document.querySelector('.popup__close_image');

// "Аналогично. Элемент статичен, его следует вынести в global scope." 
// const delBtn = document.querySelector('.location__trash'); 
// console.log(delBtn); //NULL
//элемента здесь еще нет, он создается с карточкой

// edit profile popup
const formEdit = document.querySelector('.popup__container_type_edit');
const edit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');
const popupName = document.querySelector('.popup__text_type_name');
const popupRole = document.querySelector('.popup__text_type_role');
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const closeEdit = document.querySelector('.popup__close_profile-edit');


function rateMark(){        
    event.target.classList.toggle('location__rate_marked');
}

function togglePopup(popupName){
    popupName.classList.toggle('popup_hidden');
}

// location card 
initialCards.forEach(item => addLocation(item));

function addLocation(locationCard){
    
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.location__image');    
    
    cardImage.src = locationCard.link;
    cardImage.alt = 'фото' + ' ' + locationCard.name;
    cardElement.querySelector('.location__name').textContent = locationCard.name;    
    cardElement.querySelector('.location__rate').addEventListener('click', rateMark);

    locationsContainer.prepend(cardElement);

    cardImage.addEventListener('click', function(){
        popupImage.querySelector('.popup__image').src = locationCard.link;
        popupImage.querySelector('.popup__caption').textContent = locationCard.name;
        togglePopup(popupImage);
    });

    const delBtn = document.querySelector('.location__trash');    
    delBtn.addEventListener('click' , function(){    
        const listItem = delBtn.closest('.location');
        listItem.remove();
    });
}

function saveAddPopup(event) {    
    event.preventDefault(); 
    
    let obj = {        
        name: popupLocationName.value,
        link: popupLocationRef.value,
    }    
    addLocation(obj);
    togglePopup(popupAdd);
    formAdd.reset();    
}

formAdd.addEventListener('submit', saveAddPopup);
closeAdd.addEventListener('click', togglePopup.bind(null, popupAdd));
addCard.addEventListener('click', togglePopup.bind(null, popupAdd));

closeImage.addEventListener('click', togglePopup.bind(null, popupImage));

// edit profile popup

function openEditPopup(){    
    popupName.value = profileName.textContent;
    popupRole.value = profileRole.textContent;
    togglePopup(popupEdit);
}

function saveEditPopup(event){ 
    event.preventDefault();    
    profileName.textContent = popupName.value;
    profileRole.textContent = popupRole.value;
    togglePopup(popupEdit);
}

closeEdit.addEventListener('click', togglePopup.bind(null, popupEdit));
edit.addEventListener('click', openEditPopup);
formEdit.addEventListener('submit', saveEditPopup);

