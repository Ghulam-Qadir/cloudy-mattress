/* ========================================
   MAIN JAVASCRIPT
   - Global initializations
   - Event listeners
======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Global JavaScript code can go here.
    console.log('Cloudy Mattress site initialized.');
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".mySwiper").forEach((swiperEl) => {
  let parentEl = swiperEl.closest('section');
      new Swiper(swiperEl, {
        loop: true,
        spaceBetween: 20,
        speed: 800,
  
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
  
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
        },
  
        // pagination: {
        //   el: parentEl.querySelector(".ps-arrows"),
        //   clickable: true,
        // },
  
        navigation: {
          nextEl: parentEl.querySelector(".arrow.next"),
          prevEl: parentEl.querySelector(".arrow.prev"),
        },
      });
    });
  });
  

  // let bestSellerSwiper;

  // document.addEventListener('DOMContentLoaded', function () {
  
  //   // Prevent double initialization
  //   if (document.querySelector('.mySwipergroup.swiper-initialized')) {
  //     return;
  //   }
  
  //   bestSellerSwiper = new Swiper('.mySwipergroup', {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     speed: 600,
  //     loop: false,
  
  //     navigation: {
  //       nextEl: '.ps-arrows .next',
  //       prevEl: '.ps-arrows .prev',
  //     },
  
  //     watchOverflow: true,
  //   });
  
  // });
  



