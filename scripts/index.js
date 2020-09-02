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
// edit profile popup
const formEdit = document.querySelector('.popup__container_type_edit');
const edit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');
const popupName = document.querySelector('.popup__text_type_name');
const popupRole = document.querySelector('.popup__text_type_role');
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const closeEdit = document.querySelector('.popup__close_profile-edit');


function toggleMark(markName, str){        
    markName.classList.toggle(str);
}

function closeAnyPopup(modalName){
    modalName.classList.remove('popup_opened');
}

function openAnyPopup(modalName){
    modalName.classList.add('popup_opened');
    const close = modalName.querySelector('.popup__close');
    close.addEventListener('click', closePopup);
    document.addEventListener('keydown', closeByEsc);
    const overlay = document.querySelector('.popup_opened');
    overlay.addEventListener('click', closeByOverlay);
}

function openPopup(modalName){    
    const popupSbmBtn = modalName.querySelector('.popup__btn');
    popupSbmBtn.setAttribute("disabled", "");
    popupSbmBtn.classList.add('popup__btn_disabled');
    openAnyPopup(modalName);
}

function closePopup(event){       
    const eventTarget = event.target;
    deleteEventListener(eventTarget);
    closeAnyPopup(eventTarget.closest('.popup'));
}

function deleteEventListener(eventTarget) {
    eventTarget.removeEventListener('click', closePopup);
}

// location card 
initialCards.forEach(item => addLocation(item));

function addLocation(locationCard){
    
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.location__image');    
    const delBtn = cardElement.querySelector('.location__trash'); 
    const rateMark = cardElement.querySelector('.location__rate');

    cardImage.src = locationCard.link;
    cardImage.alt = 'фото' + ' ' + locationCard.name;
    cardElement.querySelector('.location__name').textContent = locationCard.name;    
    rateMark.addEventListener('click', () => {toggleMark(rateMark, 'location__rate_marked')});

    locationsContainer.prepend(cardElement);

    cardImage.addEventListener('click', function(){
        popupImage.querySelector('.popup__image').src = locationCard.link;
        popupImage.querySelector('.popup__caption').textContent = locationCard.name;
        openAnyPopup(popupImage);
    });

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
    closeAnyPopup(popupAdd);
    formAdd.reset();    
}

formAdd.addEventListener('submit', saveAddPopup);
addCard.addEventListener('click', () => {openPopup(popupAdd)});

// edit profile popup

function openEditPopup(){    
    popupName.value = profileName.textContent;
    popupRole.value = profileRole.textContent;
    openPopup(popupEdit);    
}

function saveEditPopup(event){ 
    event.preventDefault();    
    profileName.textContent = popupName.value;
    profileRole.textContent = popupRole.value;
    closeAnyPopup(popupEdit);
}


edit.addEventListener('click', openEditPopup);
formEdit.addEventListener('submit', saveEditPopup);

function closeByEsc(event){
    if (event.keyCode === 27) {
        const popupCurrent = document.querySelector('.popup_opened');
        closeAnyPopup(popupCurrent);
        document.removeEventListener('keydown', closeByEsc);
    }
}
    
function closeByOverlay(event){
        event.stopPropagation();
        closeAnyPopup(event.target);
        document.removeEventListener('click', closeByOverlay);    
}