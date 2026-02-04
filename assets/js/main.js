document.addEventListener("DOMContentLoaded", () => {
  console.log("Auto Tabs + Swipers initialized");

  /* =========================
     INIT ALL SWIPERS (GLOBAL)
     ========================= */
  document.querySelectorAll(".swiper").forEach(swiperEl => {
    if (swiperEl.classList.contains("swiper-initialized")) return;

    const slidesCount = swiperEl.querySelectorAll(".swiper-slide").length;
    const isGroup = swiperEl.classList.contains("mySwipergroup");

    const canLoop = isGroup
      ? slidesCount > 1
      : slidesCount > 3;

    const scope = swiperEl.closest(".tab-panel") || swiperEl.closest("section") || document;
    const prevBtn = scope.querySelector(".arrow.prev");
    const nextBtn = scope.querySelector(".arrow.next");

    new Swiper(swiperEl, {
      observer: true,
      observeParents: true,

      slidesPerView: isGroup ? 1 : 3,
      spaceBetween: isGroup ? 40 : 20,
      speed: 800,
      loop: canLoop,

      autoplay: canLoop ? {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } : false,

      breakpoints: isGroup ? undefined : {
        0:    { slidesPerView: 1 },
        576:  { slidesPerView: 2 },
        992:  { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
      },

      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
    });
  });

  /* =========================
     TABS (OPTIONAL)
     ========================= */
  document.querySelectorAll(".tabs-nav").forEach(tabsNav => {
    const section = tabsNav.closest("section");
    if (!section) return;

    const tabButtons = tabsNav.querySelectorAll("[data-tab-btn]");
    const tabPanels  = section.querySelectorAll(".tabs-content .tab-panel");

    if (!tabButtons.length || !tabPanels.length) return;

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.tabBtn;

        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        tabPanels.forEach(panel => {
          panel.classList.toggle("active", panel.dataset.tabPanel === key);
        });

        // Update Swipers in active tab
        const activePanel = section.querySelector(
          `.tab-panel[data-tab-panel="${key}"]`
        );

        activePanel?.querySelectorAll(".swiper").forEach(sw => {
          if (!sw.swiper) return;
          requestAnimationFrame(() => {
            sw.swiper.updateSize();
            sw.swiper.updateSlides();
            sw.swiper.update();
          });
        });
      });
    });
  });

});

document.addEventListener('DOMContentLoaded', function () {

  const container = document.querySelector('.productmobileslider');
  const wrapper   = container?.querySelector('.ps-card-wraper');
  const slides    = container?.querySelectorAll('.product-item');

  let swiperInstance = null;

  if (!container || !wrapper || !slides.length) return;

  function handleSwiper() {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      if (isMobile) {
          // ADD classes
          container.classList.add('swiper');
          wrapper.classList.add('swiper-wrapper');
          slides.forEach(slide => slide.classList.add('swiper-slide'));

          // INIT swiper (only once)
          if (!swiperInstance) {
              swiperInstance = new Swiper(container, {
                  slidesPerView: 1.1,
                  spaceBetween: 12,
                  loop: true,
                  speed: 600,
                  autoplay: {
                      delay: 3000,              // ⏱️ change time if needed
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                  },
              });
          }

      } else {
          // DESTROY swiper
          if (swiperInstance) {
              swiperInstance.destroy(true, true);
              swiperInstance = null;
          }

          // REMOVE classes
          container.classList.remove('swiper');
          wrapper.classList.remove('swiper-wrapper');
          slides.forEach(slide => slide.classList.remove('swiper-slide'));
      }
  }

  handleSwiper();
  window.addEventListener('resize', handleSwiper);
});

document.addEventListener('DOMContentLoaded', function () {

  const container = document.querySelector('.plushcardmain');
  const wrapper   = container?.querySelector('.plushcardmainwraper');
  const slides    = container?.querySelectorAll('.plush-card');

  let swiperInstance = null;

  if (!container || !wrapper || !slides.length) return;

  function handleSwiper() {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      if (isMobile) {
          // ADD classes
          container.classList.add('swiper');
          wrapper.classList.add('swiper-wrapper');
          slides.forEach(slide => slide.classList.add('swiper-slide'));

          // INIT swiper (only once)
          if (!swiperInstance) {
              swiperInstance = new Swiper(container, {
                  slidesPerView: 1,
                  spaceBetween: 12,
                  loop: true,
                  speed: 600,
                  autoplay: {
                      delay: 3000,              // ⏱️ change time if needed
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                  },
              });
          }

      } else {
          // DESTROY swiper
          if (swiperInstance) {
              swiperInstance.destroy(true, true);
              swiperInstance = null;
          }

          // REMOVE classes
          container.classList.remove('swiper');
          wrapper.classList.remove('swiper-wrapper');
          slides.forEach(slide => slide.classList.remove('swiper-slide'));
      }
  }

  handleSwiper();
  window.addEventListener('resize', handleSwiper);
});



