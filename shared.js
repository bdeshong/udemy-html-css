var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNegativeButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function () {
            backdrop.classList.add('open');
        }, 10);
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
    backdrop.style.display = 'block';
    setTimeout(function () {
        backdrop.classList.add('open');
    }, 10);
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
    setTimeout(function () {
        backdrop.style.display = 'none';
    }, 200);
}

ctaButton.addEventListener('animationstart', function (event) {
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', function (event) {
    console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', function (event) {
    console.log('Animation iteration', event);
});