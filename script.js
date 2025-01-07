// 네비게이션 스크롤 이벤트 ----------------------------------------------------------------------------------------------------
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navigator");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// 스크롤 할 경우 내부 요소 드러나는 이벤트 ----------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const pages = document.querySelectorAll('.page');

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  pages.forEach(page => {
    observer.observe(page);
  });
});

// 슬라이더 이벤트 ----------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const pagination = document.querySelector('.pagination');

  let currentIndex = 0;

  // Create pagination buttons
  slides.forEach((_, index) => {
    const button = document.createElement('button');
    if (index === 0) button.classList.add('active');
    button.addEventListener('click', () => goToSlide(index));
    pagination.appendChild(button);
  });

  function goToSlide(index) {
    sliderTrack.style.transform = `translateX(-${index * 100}%)`;
    pagination.querySelectorAll('button').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }
});
