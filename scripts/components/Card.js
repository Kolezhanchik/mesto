export default class Card {
    
    constructor(cardData, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = cardData.name;
        this._link = cardData.link;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector)
            .content.querySelector('.location').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.location__image').src = this._link;
        this._element.querySelector('.location__name').textContent = this._name;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.location__trash').addEventListener('click', () => {
            this._handleDeleteClick();
        });

        this._element.querySelector('.location__rate').addEventListener('click', () => {
            this._handleRateClick();
        });

        this._element.querySelector('.location__image').addEventListener('click', () => {
            this._handleImageClick();
        });
    }

    _handleDeleteClick() {
        this._element.querySelector('.location__trash').closest('.location').remove();
    }

    _handleRateClick() {
        this._element.querySelector('.location__rate').classList.toggle('location__rate_marked');
    }

    _handleImageClick() {
        this._popupImageOpen(document.querySelector('.popup_type_show'));
    }

    _popupImageOpen(elem) {
        elem.querySelector('.popup__image').src = this._link;
        elem.querySelector('.popup__caption').textContent = this._name;
        elem.classList.add('popup_opened');
        elem.querySelector('.popup__close').addEventListener('click', () => {
            this._handlePopupClose(elem);
        });

        document.addEventListener('keydown', (event) => {
            this._handlecloseByEsc(event, elem);
        });
        document.querySelector('.popup_type_show').addEventListener('click', (event) => { this._handlecloseByOverlay(event, elem) });
    }

    _handlePopupClose(elem) {
        this._removeCloseListners(elem);
        elem.classList.remove('popup_opened');
    }

    _handlecloseByEsc(event, elem) {
        if (event.keyCode === 27) {
            elem.classList.remove('popup_opened');
            this._removeCloseListners(elem);
        }
    }

    _handlecloseByOverlay(event, elem) {
        if (event.target === event.currentTarget) {
            elem.classList.remove('popup_opened');
            this._removeCloseListners(elem);
        }
    }

    _removeCloseListners(elem) {
        document.querySelector('.popup_type_show').removeEventListener('click', this._handlecloseByOverlay);
        elem.querySelector('.popup__close').removeEventListener('click', this._handlePopupClose);
        document.removeEventListener('click', this._handlecloseByEsc);

    }
}

