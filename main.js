/* Слайдер */

var activeSlide = 1;
var timer;

/* Проверка активного слайда */
function checkSliderLinksActive(num) {
  let sliderLinks = document.getElementsByClassName('slider_control__btn');

  for (let i = 0; i < sliderLinks.length; i++ ) {
    sliderLinks[i].classList.remove('active');
  }
  sliderLinks[num- 1].classList.add('active');
}

/* Переключение слайдов */
function setClickedArrow(e) {
  resetTimer();

  let clickedArrow = e.target;

  if ( clickedArrow.className == 'arrow-right' ) {
    if (activeSlide >= 5) {
      activeSlide = 1;
    } else {
      activeSlide = activeSlide + 1;
    }
  } else if (clickedArrow.className == 'arrow-left') {
    if (activeSlide === 1) {
      activeSlide = 5;
    } else {
      activeSlide = activeSlide - 1;
    }
  }
  document.getElementById('header').style.backgroundImage = `url(./images/slide-${activeSlide}.jpg)`;

  checkSliderLinksActive(activeSlide);
}


/* Переключение слайдера через кружочки */
function sliderLinks(num) {
  resetTimer();
  activeSlide = num;
  checkSliderLinksActive(activeSlide);
  document.getElementById('header').style.backgroundImage = `url(./images/slide-${activeSlide}.jpg)`;
}

/* Старт таймера */
function startTimer() {
  timer = setInterval(function() {
    if (activeSlide >= 5) {
      activeSlide = 1;
    } else {
      activeSlide = activeSlide + 1;
    }
    document.getElementById('header').style.backgroundImage = `url(./images/slide-${activeSlide}.jpg)`;
    checkSliderLinksActive(activeSlide);
  }, 4000);
}

/* Перезапуск таймера */
function resetTimer() {
  clearInterval(timer);
  startTimer();
}

startTimer();

/* Фильтр галереи */

function checkFilterActive(num, e) {
  let filterBtn = document.getElementsByClassName('filter__btn');
  let galeryCard = document.getElementsByClassName('galery_card');

  for (let i = 0; i < filterBtn.length; i++ ) {
    filterBtn[i].classList.remove('active');
  }
  filterBtn[num -1].classList.add('active');

  for (let i = 0; i < galeryCard.length; i++) {
    if (e.target.classList.contains('graphic') && galeryCard[i].classList.contains('graphic')) {
      galeryCard[i].style.display = 'block';
    } else if (e.target.classList.contains('photo') && galeryCard[i].classList.contains('photo')) {
      galeryCard[i].style.display = 'block';
    } else if (e.target.classList.contains('all')) {
      galeryCard[i].style.display = 'block';
    } else {
      galeryCard[i].style.display = 'none';
    }
  }  
}