import wrongImage from '../../images/wrong-image.svg';

export default class Card {

  constructor({ handleCardClick, handleLikeClick, handleDelLikeClick, handleTrashClick }, cardData, userID, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._userID = userID;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDelLikeClick = handleDelLikeClick;
    this._handleTrashClick = handleTrashClick;
    this._cardData = cardData;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector)
      .content.querySelector('.location').cloneNode(true);
    return cardElement;
  }

  _likeClick(cardData) {
    this._handleLikeClick(cardData);
  }

  _delLike(cardData) {
    this._handleDelLikeClick(cardData);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.location__image').src = this._link;
    this._element.querySelector('.location__image').onerror = () => this._element.querySelector('.location__image').src = wrongImage;
    this._element.querySelector('.location__name').textContent = this._name;
    this._element.querySelector('.location__likes').textContent = this._likes.length;
    this._mark = this._element.querySelector('.location__rate');
    this._delBtn = this._element.querySelector('.location__trash');
    this._element.setAttribute('id', `_${this._cardData._id}`);
    this._isCardOwner();
    this._isLiked();
    this._setEventListeners();
    return this._element;
  }

  setLikeCount(data) {
    this._element.querySelector('.location__likes').textContent = data.likes.length;
  }

  _setEventListeners() {
    this._delBtn.addEventListener('click', () => {
      this._handleTrashClick();
    });

    this._mark.addEventListener('click', () => {
      if (!this._mark.classList.contains(('location__rate_marked'))) {
        this._mark.classList.toggle('location__rate_marked');
        this._likeClick(this._cardData);
      }
      else {
        this._mark.classList.toggle('location__rate_marked');
        this._delLike(this._cardData);
      }
    });

    this._element.querySelector('.location__image').addEventListener('click', () => { this._handleCardClick(this._cardData); });
  }

  _isCardOwner() {
    if (this._cardData.owner._id !== this._userID) {
      this._handleDeleteClick(this._delBtn);
    }
  }

  _isLiked() {
    this._cardData.likes.forEach((item)=>{
      if(item._id === this._userID){
        this._mark.classList.add('location__rate_marked');
      }
    })
  }

  deleteCard(){
    this._handleDeleteClick(this._element);
  }

  _handleDeleteClick(element) {
    element.remove();
    element = null;
  }
}
