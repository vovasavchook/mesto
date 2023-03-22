let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');

let userName = document.querySelector('.profile__user-name');
let userProfession = document.querySelector('.profile__user-profession');

let userNameInput = document.querySelector('#user-name');
let userProfessionInput = document.querySelector('#user-profession');

function openPopup() {
  popup.classList.add('popup_opened');

  userNameInput.setAttribute('value', userName.textContent);
  userProfessionInput.setAttribute('value', userProfession.textContent);
};

popupCloseButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

editButton.addEventListener('click', openPopup);




let formElement = document.querySelector('.form');

function handleFormSubmit (evt) {
  evt.preventDefault();

  userNameInput = document.querySelector('#user-name');
  userProfessionInput = document.querySelector('#user-profession');

  userName.textContent = userNameInput.value;
  userProfession.textContent = userProfessionInput.value;

  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);
