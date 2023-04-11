import './src/scss/index.scss';
document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
  document.getElementsByTagName('body')[0].classList.toggle('blockScroll');
});

document.querySelector('.uppward').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const typed = new Typed('#typed', {
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 500,
  stringsElement: '#typed-strings',
  showCursor: false,
});

function startAnimation() {
  let options = {
    threshold: [0.5],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.post_animation');
  let button = document.querySelector('.news-block__button');
  for (let elem of elements) {
    observer.observe(elem);
  }
  observer.observe(button);
  function onEntry(entry) {
    entry.forEach((elem) => {
      if (
        elem.target.classList[0] === 'news-block__button' &&
        elem.isIntersecting
      ) {
        elem.target.classList.add('news-block__button_show');
        console.log(elem.target);
      }
      if (elem.isIntersecting) {
        elem.target.classList.add('element-show');
      } else {
        elem.target.classList.remove('element-show');
      }
    });
  }
}
startAnimation();
