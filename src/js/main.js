// Custom scripts

//Scroll animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();



// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
    } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
    }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
    }
    })
}
burgerMenu()


  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
    } else {
    nav.classList.remove('fixed__nav')
    }
}
window.addEventListener('scroll', fixedNav)

//Slider Review
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,    
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
          clickable: true,          
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });


  //Pop up
  const popup = document.querySelector('.popup');
  const close = document.querySelector('.close');
  

  window.onload = function() {
    setTimeout(function() {
      popup.style.display = "block",      
      document.getElementById('overlay').classList.add('blur-in')

      //Add timout 2 seconds
    }, 2000)
  }

  close.addEventListener('click', () => {
    popup.style.display = "none"
    document.getElementById('overlay').classList.remove('blur-in')
  })
  
