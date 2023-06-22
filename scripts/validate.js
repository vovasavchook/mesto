const data = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitSelector: '.form__submit',
  inactiveSubmitClass: '.form__submit_inactive',
  inputInvalidClass: '.form__input_invalid',
  errorClass: '.form__error'
};

/* Мне не нравится это решение, но оно наиболее простое и короткое */
document.addEventListener('invalid', (e) => {
  e.preventDefault();
}, true);

const formIsValid = (form) => {
  const inputList = Array.from(form.querySelectorAll('input'));

  return !inputList.some(input => !input.validity.valid);

};

const enableValidation = (data) => {
  // проходимся по каждой форме
  // накидываем какие-то ивентлисенеры... на что-то
  const formList = document.querySelectorAll(data.formSelector);
  formList.forEach((form) => {
    form.addEventListener('input', ()=>{
      console.log(formIsValid(form));
      return formIsValid(form);
    })
  })
};

const activateSubmit = (button) => {
  button.classList.remove('.form__submit_inactive');
};

const deactivateSubmit = (button) => {
  button.classList.add('.form__submit_inactive');
};

enableValidation(data);

userNameInput.addEventListener('input', (e) => {

  const userNameError = document.querySelector('#user-name-error')
  if (!e.target.validity.valid) {
    userNameError.textContent = e.target.validationMessage;
    userNameError.classList.add('form__error_active');
    e.target.classList.add('form__input_invalid');
  } else {
    userNameError.classList.remove('form__error_active');
    e.target.classList.remove('form__input_invalid');
  }
  console.log(formIsValid(editForm));
});
