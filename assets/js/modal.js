import { modalData } from './modalData.js';

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeButton = modal.querySelector('[data-close-modal]');
let lastFocusedElement = null;

const openModal = (key) => {
  const data = modalData[key];
  if (!data) {
    console.warn(`Modal inconnue : ${key}`);
    return;
  }

  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  modalTitle.textContent = data.title;
  modalBody.innerHTML = data.content;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  closeButton.focus();
};

const closeModal = () => {
  modal.setAttribute('hidden', '');
  modalBody.innerHTML = '';
  document.body.style.overflow = '';
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
};

const onBackgroundClick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

const onKeyDown = (event) => {
  if (event.key === 'Escape' && !modal.hasAttribute('hidden')) {
    closeModal();
  }
};

const initializeCards = () => {
  const cards = document.querySelectorAll('[data-modal]');
  cards.forEach((card) => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
  });
};

initializeCards();
closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', onBackgroundClick);
document.addEventListener('keydown', onKeyDown);

export { openModal, closeModal };
