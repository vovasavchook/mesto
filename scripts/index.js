const initialCards = [
  {name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
  {name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
  {name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},
  {name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},
  {name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},
  {name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}
];

const userNameElement = document.querySelector('.profile__user-name');
const userProfessionElement = document.querySelector('.profile__user-profession');

const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');

const editForm = document.querySelector('#edit-form');
const addForm = document.querySelector('#add-form');

const userNameInput = document.edit['user-name-input']; // <- неправильно понял замечание и нашел вот такую фичу, лол
const userProfessionInput = document.edit['user-profession-input'];
const cardTitleInput = document.add['card-title-input'];
const cardPhotoInput = document.add['card-photo-input'];

const editPopup = document.querySelector('#edit-popup');
const addPopup = document.querySelector('#add-popup');
const photoPopup = document.querySelector('#photo-popup');

const popupCloseButtons = document.querySelectorAll('.popup__close-button');

const photoPopupTitle = photoPopup.querySelector('.popup__title');
const photoPopupImage = photoPopup.querySelector('.popup__image');

const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;

function handleEditForm(evt){
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userProfessionElement.textContent = userProfessionInput.value;

};

function handleAddForm(evt){
  evt.preventDefault();
  const title = cardTitleInput.value;
  const photo = cardPhotoInput.value;

  cardsContainer.prepend(createCard(title, photo));

  evt.target.reset();
};

function openPopup (popup){
  popup.classList.add('popup_opened');
};

function closePopup (popup){
  popup.classList.remove('popup_opened');
};

function createCard(name, link){
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardPhoto = card.querySelector('.card__photo');
  const cardLikeButton = card.querySelector('.card__like-button');
  const cardRemoveButton = card.querySelector('.card__remove-button');

  cardTitle.textContent = name;
  cardPhoto.src = link;
  cardPhoto.alt = name;

  cardLikeButton.addEventListener('click', (evt) => evt.target.classList.toggle('card__like-button_active'));
  cardRemoveButton.addEventListener('click', (evt) => evt.target.closest('.card').remove());
  cardPhoto.addEventListener('click', (evt) => {
    photoPopupImage.src = evt.target.src;
    photoPopupImage.alt = cardTitle.textContent;
    photoPopupTitle.textContent = cardTitle.textContent;
    openPopup(photoPopup);
    /* Здесь где-то надо сделать очистку фото-попапа от контента по закрытию.
    А так же добавить новые способы закрытия по ESC и клику вне попапа */
  });

  return card;
};

profileEditButton.addEventListener('click', () => {
  userNameInput.value = userNameElement.textContent;
  userProfessionInput.value = userProfessionElement.textContent;
  openPopup(editPopup);
});

profileAddButton.addEventListener('click', () => openPopup(addPopup));

addForm.addEventListener('submit', (evt) => {
  handleAddForm(evt);
  closePopup(addPopup);
});

editForm.addEventListener('submit', (evt) => {
  handleEditForm(evt);
  closePopup(editPopup);
});

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item.name, item.link))
});

popupCloseButtons.forEach((item) => {
  const target = item.closest('.popup');
  item.addEventListener('click', () => closePopup(target));
});
