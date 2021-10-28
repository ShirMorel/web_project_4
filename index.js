let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let profileEditButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.edit-profile');
let popupCloseButton = document.querySelector('.edit-profile__close-button');
let popupSaveButton = document.querySelector('.edit-profile__save-button');
let popupInputName = document.querySelector('.edit-profile__input_name');
let popupInputAbout = document.querySelector('.edit-profile__input_about');

profileEditButton.addEventListener('click', () => {
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileDescription.textContent;
  openPopup();
});

popupSaveButton.addEventListener('click', (event) => {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputAbout.value;
  closePopup();
});

popupCloseButton.addEventListener('click', closePopup);

function openPopup() {
  popup.classList.add('edit-profile__opened')
}

function closePopup() {
  popup.classList.remove('edit-profile__opened')
}
