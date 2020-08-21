
// add location popup 
const formAdd = document.querySelector('.popup__container_type_add');
const locationsContainer = document.querySelector('.locations');
const addCard = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup_type_add');
const popupLocationName = document.querySelector('.popup__text_type_location-name');
const popupLocationRef = document.querySelector('.popup__text_type_ref');
const closeAdd = document.querySelector('.popup__close_location-add');
const popupImage = document.querySelector('.popup_type_show');
const closeImage = document.querySelector('.popup__close_image');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

initialCards.forEach(item => addLocation(item));

function addLocation(locationCard){
    const cardTemplate = document.querySelector('#location-card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.location__image');
    
    cardImage.src = locationCard.link;
    cardImage.alt = 'фото' + ' ' + locationCard.name;
    cardElement.querySelector('.location__name').textContent = locationCard.name;
    
    cardElement.querySelector('.location__rate').addEventListener('click', function(event){        
        event.target.classList.toggle('location__rate_marked');
    });

    locationsContainer.prepend(cardElement);

    cardImage.addEventListener('click', function(){
        popupImage.querySelector('.popup__image').src = locationCard.link;
        popupImage.querySelector('.popup__caption').textContent = locationCard.name;
        popupImage.classList.toggle('popup_hidden');
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
    closeAddPopup();
    formAdd.reset();    
}

function closeAddPopup(){
    popupAdd.classList.add('popup_hidden');
}

closeAdd.addEventListener('click', closeAddPopup);
formAdd.addEventListener('submit', saveAddPopup);
addCard.addEventListener('click', () => {popupAdd.classList.remove('popup_hidden')});

//close image popup

console.log(closeImage);

function closeImagePopup(){
    popupImage.classList.add('popup_hidden');
}

closeImage.addEventListener('click', closeImagePopup);
// popupImage.addEventListener('click', closeImagePopup);


// edit profile popup


const formEdit = document.querySelector('.popup__container_type_edit');
const edit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');
const popupName = document.querySelector('.popup__text_type_name');
const popupRole = document.querySelector('.popup__text_type_role');
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const closeEdit = document.querySelector('.popup__close_profile-edit');

function openEditPopup(){    
    popupName.value = profileName.textContent;
    popupRole.value = profileRole.textContent;
    popupEdit.classList.remove('popup_hidden');
}

function saveEditPopup(event){ 
    event.preventDefault();    
    profileName.textContent = popupName.value;
    profileRole.textContent = popupRole.value;
    closeEditPopup();
}

function closeEditPopup(){
    popupEdit.classList.add('popup_hidden');
}

closeEdit.addEventListener('click', closeEditPopup);
edit.addEventListener('click', openEditPopup);
formEdit.addEventListener('submit', saveEditPopup);

