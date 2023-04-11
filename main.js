import './src/scss/index.scss';
document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
});

document.querySelector('.uppward').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
