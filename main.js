import './src/scss/index.scss';
document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
});

document.querySelector('.uppward').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const typed = new Typed('#typed', {
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 500,
  stringsElement: '#typed-strings',
});
