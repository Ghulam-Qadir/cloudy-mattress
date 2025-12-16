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
  
        pagination: {
          el: swiperEl.querySelector(".ps-arrows"),
          clickable: true,
        },
  
        navigation: {
          nextEl: swiperEl.querySelector(".arrow.next"),
          prevEl: swiperEl.querySelector(".arrow.prev"),
        },
      });
    });
  });
  



