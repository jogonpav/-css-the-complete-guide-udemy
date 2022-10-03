let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal')
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButton = document.querySelectorAll('.plan button');
let toggleButtom = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav')


for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', openModal
    );
}

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}


backdrop.addEventListener('click', function () {
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open')

    closeModal();
});

function openModal() {
    //modal.style.display = 'block';
    //backdrop.style.display = 'block';
    //modal.className = 'open'; //this will actually overwrite the complete class list
    modal.classList.add('open');
    backdrop.classList.add('open');
}

function closeModal() {
    //modal.style.display = 'none';
    //backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }

    backdrop.classList.remove('open');
}

toggleButtom.addEventListener('click', function () {
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});