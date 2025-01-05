// 상단 네비게이션 바 스크롤 관련 이벤트
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navigator");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});



// 절반 스크롤 할 경우 내부 요소 드러나는 이벤트
document.addEventListener('DOMContentLoaded', function () {
  // Intersection Observer 옵션 설정
  const options = {
    root: null,  // viewport를 기준으로
    rootMargin: '0px',  // 마진 설정
    threshold: 0.5  // 요소가 50% 보일 때 트리거
  };

  // 각 페이지 요소를 선택
  const pages = document.querySelectorAll('.page');

  // Intersection Observer 콜백 함수
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 요소가 50% 이상 보이면 visible 클래스 추가
        entry.target.classList.add('visible');
      } else {
        // 요소가 화면에서 벗어나면 visible 클래스 제거
        entry.target.classList.remove('visible');
      }
    });
  };

  // Intersection Observer 객체 생성
  const observer = new IntersectionObserver(observerCallback, options);

  // 각 페이지 요소에 대해 observer 적용
  pages.forEach(page => {
    observer.observe(page);
  });
});