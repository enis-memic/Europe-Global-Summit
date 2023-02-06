const closeBtn = document.querySelector('.closing-icon');
const openBtn = document.querySelector('.enabled-menu');

openBtn.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('visible');
});
closeBtn.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('visible');
});

document.querySelectorAll('.navigation').forEach((li) => {
  li.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('visible');
  });
});
