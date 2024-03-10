// Анимация скрытия меню
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.header-burger');

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    })
  })
}

// Плавный скролл до блоков
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
});

// Слайдер
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
  breakpoints: {
    1020: {
      slidesPerView: 3
    },
    576: {
      slidesPerView: 2
    }
  }
});