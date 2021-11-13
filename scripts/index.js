const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

/*profile*/
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

/*popup*/
const editPopup = document.querySelector('#edit-popup');
const addPopup = document.querySelector('#add-popup');
const photoPopup = document.querySelector('#photo-popup');
const editForm = document.querySelector('#edit-form');
const addForm = document.querySelector('#add-form');
const popupSaveButton = document.querySelector('.popup__save-button');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputAbout = document.querySelector('.popup__input_type_about');
const popupInputTitle = document.querySelector('.popup__input_type_title');
const popupInputImg = document.querySelector('.popup__input_type_img');

/*cards*/
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const elements = document.querySelector('.elements');



function createCardElement(cardData) {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.card__description').textContent = cardData.name;
  card.querySelector('.card__photo').style.backgroundImage = `url(${cardData.link})`;

  const heartButton = card.querySelector('.card__heart-button');
  heartButton.addEventListener('click', () => {
    heartButton.classList.toggle('card__heart-button_active')
  });

  card.querySelector('.card__delete-button').addEventListener('click', (event) => {
    const listItem = event.target.closest('.card');
      listItem.remove();
    });

  card.querySelector('.card__photo').addEventListener('click', (event) => {
    document.querySelector('.popup__img').src = cardData.link;
    document.querySelector('.popup__figcaption').textContent = cardData.name;
    openPopup(photoPopup);
  });

  return card;
};

initialCards.forEach(initialCardData => {
  elements.prepend(createCardElement(initialCardData));
});

/*close buttons*/
const allCloseButtons = document.querySelectorAll('.popup__close-button');

allCloseButtons.forEach(btn => btn.addEventListener('click', () => {
  const allPopups = document.querySelectorAll('.popup');
  allPopups.forEach(popup => popup.classList.remove('popup_opened'))
}));

/*edit profile popup*/
profileEditButton.addEventListener('click', () => {
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileDescription.textContent;
  openPopup(editPopup);
});

function openPopup(editPopup) {
  editPopup.classList.add('popup_opened')
};

function closePopup(editPopup) {
  editPopup.classList.remove('popup_opened')
};

/*edit form submit*/
editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputAbout.value;
  closePopup(editPopup);
});

/*add popup*/
profileAddButton.addEventListener('click', () => {
  openPopup(addPopup);
});

function openPopup(addPopup) {
  addPopup.classList.add('popup_opened')
};

function closePopup(addPopup) {
  addPopup.classList.remove('popup_opened')
};

/*add form submit*/
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closePopup(addPopup);
  const cardData = {
    name: popupInputTitle.value,
    link: popupInputImg.value
  };
  const card = createCardElement(cardData);
  elements.prepend(card);
});
