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
  showCursor: false,
});

function startAnimation() {
  let options = {
    threshold: [0.5],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.post_animation');
  for (let elem of elements) {
    observer.observe(elem);
  }
  function onEntry(entry) {
    entry.forEach((elem) => {
      // console.log(elem.target.classList);
      if (elem.isIntersecting) {
        elem.target.classList.add('element-show');
        console.log('zopa');
      } else {
        elem.target.classList.remove('element-show');
      }
    });
  }
}
startAnimation();
