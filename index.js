let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');

let userName = document.querySelector('.profile__user-name');
let userProfession = document.querySelector('.profile__user-profession');
let editButton = document.querySelector('.profile__edit-button');

let formElement = document.querySelector('.form');
let userNameInput = document.querySelector('#user-name');
let userProfessionInput = document.querySelector('#user-profession');

function openPopup() {
  userNameInput.setAttribute('value', userName.textContent);
  userProfessionInput.setAttribute('value', userProfession.textContent);

  popup.classList.add('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault();

  userName.textContent = userNameInput.value;
  userProfession.textContent = userProfessionInput.value;

  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

popupCloseButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

editButton.addEventListener('click', openPopup);
