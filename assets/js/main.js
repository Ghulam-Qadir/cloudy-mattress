/* ========================================
   MAIN JAVASCRIPT
   - Global initializations
   - Event listeners
   ======================================== */

   document.addEventListener('DOMContentLoaded', function() {
    // Global JavaScript code can go here.
    console.log('Cloudy Mattress site initialized.');





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
        
        
        navigation: {
          nextEl: parentEl.querySelector(".arrow.next"),
          prevEl: parentEl.querySelector(".arrow.prev"),
        },
      });
    });

   

   new Swiper(".mySwipergroup", {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    spaceBetween: 40,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".arrow.next",
      prevEl: ".arrow.prev",
    },

    pagination: {
      el: ".ps-arrows",
      clickable: true,
    },
  });



  
  const pills = document.querySelectorAll('.ps-pills .pill');
  const swiperEl = document.querySelector('.mySwiper');
  const swiper = swiperEl.swiper;
  
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
  
      // ---- Active pill ----
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
  
      const category = pill.dataset.category;
  
      // ---- Filter slides (DO NOT REMOVE) ----
      swiper.slides.forEach(slide => {
        const slideCategory = slide.dataset.category;
  
        const shouldShow =
          category === 'all' || slideCategory === category;
  
        slide.style.display = shouldShow ? '' : 'none';
      });
  
      // ---- Refresh Swiper layout ----
      swiper.update();
    });
  });
  
  
  
  
  
 



  
   
});


