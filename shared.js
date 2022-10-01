let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal')
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButton = document.querySelectorAll('.plan button');


for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click',
    );
}

modalNoButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}