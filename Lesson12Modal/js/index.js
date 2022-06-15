const btnOpenModal = document.querySelector('.openModal');
const btnCloseModal = document.querySelector('.closeModal');
const modal = document.querySelector('.modal');
const modalWrap = document.querySelector('.modal-wrap');
const img = document.getElementById('FC');

console.log(img);

btnOpenModal.addEventListener('click', () => {
    modal.style.opacity = '1';
    modal.style.transition = 'all 300ms ease-in-out';

    modalWrap.style.opacity = '1';
    modalWrap.style.transform = 'scale(1)';
    modalWrap.style.transition = 'opacity 250ms 500ms ease, transform 350ms 500ms ease';

    btnCloseModal.style.opacity = '1';
    btnCloseModal.style.transition = 'opacity 250ms 500ms ease, transform 350ms 500ms ease';

    img.style.filter = 'brightness(100%)';
    img.style.transition = 'all 250ms linear';
})

btnCloseModal.addEventListener('click', () => {
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 250ms 700ms ease';

    modalWrap.style.opacity = '0';
    modalWrap.style.transform = 'scale(0.6)';
    modalWrap.style.transition = 'opacity 250ms 250ms ease, transform 300ms 250ms ease';

    btnCloseModal.style.opacity = '0';
    btnCloseModal.style.transition = 'all 200ms linear';

    img.style.filter = 'brightness(10%)';
    img.style.transition = 'filter 250ms 700ms linear';

})