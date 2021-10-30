const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupSaveButton = document.querySelector('.popup__save-button');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputAbout = document.querySelector('.popup__input_type_about');

profileEditButton.addEventListener('click', () => {
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileDescription.textContent;
  openPopup();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputAbout.value;
  closePopup();
});

popupCloseButton.addEventListener('click', closePopup);

function openPopup() {
  popup.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened')
}
