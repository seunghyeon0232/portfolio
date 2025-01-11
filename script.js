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
  const slider = document.querySelector('.slider');

  let currentIndex = 0;
  let autoSlideInterval;

  // Create pagination buttons
  slides.forEach((_, index) => {
    const button = document.createElement('button');
    if (index === 0) button.classList.add('active');
    button.addEventListener('click', () => goToSlide(index));
    pagination.appendChild(button);
  });

  // Create left and right navigation buttons
  const leftButton = document.createElement('button');
  leftButton.classList.add('nav-button', 'left');
  leftButton.innerHTML = '&#8249;'; // Left arrow
  leftButton.addEventListener('click', () => goToSlide(currentIndex - 1));

  const rightButton = document.createElement('button');
  rightButton.classList.add('nav-button', 'right');
  rightButton.innerHTML = '&#8250;'; // Right arrow
  rightButton.addEventListener('click', () => goToSlide(currentIndex + 1));

  slider.appendChild(leftButton);
  slider.appendChild(rightButton);

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1; // Wrap around to the last slide
    if (index >= slides.length) index = 0; // Wrap around to the first slide

    sliderTrack.style.transform = `translateX(-${index * 100}%)`;
    pagination.querySelectorAll('button').forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
    currentIndex = index;
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 10000); // 3 seconds
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  startAutoSlide();
});
