import wrongImage from '../../images/wrong-image.svg';

export default class Card {

    constructor({ handleCardClick }, cardData, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = cardData.name;
        this._link = cardData.link;
        this._handleCardClick = handleCardClick;
        this._cardData = cardData;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector)
            .content.querySelector('.location').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.location__image').src = this._link;
        this._element.querySelector('.location__image').onerror = () => this._element.querySelector('.location__image').src = wrongImage;
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

        this._element.querySelector('.location__image').addEventListener('click', () => { this._handleCardClick(this._cardData); });
    }

    _handleDeleteClick() {
        this._element.querySelector('.location__trash').closest('.location').remove();
    }

    _handleRateClick() {
        this._element.querySelector('.location__rate').classList.toggle('location__rate_marked');
    }

}

