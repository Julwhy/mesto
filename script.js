let popup = document.querySelector('.popup')
let openButton = document.querySelector('.profile-info__edit-button')
let closeButtom = popup.querySelector('.popup__close')
let nameInput = popup.querySelector('.popup__item_el_name')
let jobInput = popup.querySelector('.popup__item_el_description')
let nameProfile = document.querySelector('.profile-info__name')
let description = document.querySelector('.profile-info__description')


function togglePopup() {
    popup.classList.toggle('popup_opened');

    nameInput.value = nameProfile.textContent;
    jobInput.value = description.textContent;

}

openButton.addEventListener('click', togglePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();

    //nameInput = nameInput.value;
    //jobInput = jobInput.value;

    nameProfile.textContent = nameInput.value;
    description.textContent = jobInput.value;

    popup.classList.toggle('popup_opened');

}

function closePopup(evt) {
    if (evt.target === evt.currentTarget) {
        togglePopup(evt)
    }
}





closeButtom.addEventListener('click', togglePopup);
popup.addEventListener('click', closePopup);
popup.addEventListener('submit', formSubmitHandler);