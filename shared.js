var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNegativeButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNegativeButton) {
    modalNegativeButton.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        backdrop.classList.remove('open');
        modal.classList.remove('open');
    });
}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

function showModal(targetModal) {
    // backdrop.style.display = 'block';
    // targetModal.style.display = 'block';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }

    backdrop.classList.remove('open');
}