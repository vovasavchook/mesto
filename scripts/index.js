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

const addForm = document.querySelector('#add-form');
const editForm = document.querySelector('#edit-form');

const editPopup = document.querySelector('#edit-popup');
const addPopup = document.querySelector('#add-popup');
const photoPopup = document.querySelector('#photo-popup');

const cardsContainer = document.querySelector('.cards');

function handleEditForm(evt){
  evt.preventDefault();
  const form = evt.target;
  userNameElement.textContent = form.querySelector('#user-name').value;
  userProfessionElement.textContent = form.querySelector('#user-profession').value;

};

function handleAddForm(evt){
  evt.preventDefault();
  const form = evt.target;
  const title = form.querySelector('#card-title').value;
  const photo = form.querySelector('#card-photo').value;

  addNewCard(title, photo);

  form.querySelector('#card-title').value = '';
  form.querySelector('#card-photo').value = '';

};

function openPopup (popup){
  popup.classList.add('popup_opened');
};

function closePopup (popup){
  popup.classList.remove('popup_opened');
};

function addNewCard(name, link){
  const cardTemplate = document.querySelector('#card-template').content;
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
    const title= evt.target.nextElementSibling.firstElementChild.textContent;
    photoPopup.querySelector('.popup__photo').src = evt.target.src;
    photoPopup.querySelector('.popup__title').textContent = title;
    openPopup(photoPopup);
  });

  cardsContainer.prepend(card);
}

profileEditButton.addEventListener('click', () => {
  editForm.querySelector('#user-name').value = userNameElement.textContent;
  editForm.querySelector('#user-profession').value = userProfessionElement.textContent;
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

initialCards.forEach((item) => addNewCard(item.name, item.link))

const popupCloseButtons = document.querySelectorAll('.popup__close-button');
popupCloseButtons.forEach((item) => {
  const target = item.closest('.popup');
  item.addEventListener('click', () => closePopup(target));
});
