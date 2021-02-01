let popup = document.querySelector('.popup')
let openButton = document.querySelector('.profile-info__edit-button')
let closeButtom = popup.querySelector('.popup__close')
let nameInput = popup.querySelector('.popup__item_el_name')
let jobInput = popup.querySelector('.popup__item_el_description')
let nameProfile = document.querySelector('.profile-info__name')
let description = document.querySelector('.profile-info__description')

//Открытие и закрытие формы по кнопкам

function togglePopup() {
    popup.classList.toggle('popup_opened');
}

openButton.addEventListener('click', togglePopup);
closeButtom.addEventListener('click', togglePopup);

// Заполнение формы данными профайла
function openPopup() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = description.textContent;
}

openButton.addEventListener('click', openPopup);

// Заполнение профайла данными из формы
function formSubmitHandler (evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    description.textContent = jobInput.value;

    popup.classList.toggle('popup_opened');
}

popup.addEventListener('submit', formSubmitHandler);

// Закрытие формы по overlay
function closePopup(evt) {
    if (evt.target === evt.currentTarget) {
        togglePopup(evt)
    }
}

popup.addEventListener('click', closePopup);