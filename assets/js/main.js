document.addEventListener("DOMContentLoaded", function () {

  console.log("Cloudy Mattress initialized");

  /* =========================
     TABS (data attributes)
     ========================= */
  const tabButtons = document.querySelectorAll(".tabs-nav [data-tab-btn]");
  const tabPanels  = document.querySelectorAll(".tabs-content .tab-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const key = this.dataset.tabBtn;

      // pills
      tabButtons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      // panels
      tabPanels.forEach(panel => {
        panel.classList.toggle("active", panel.dataset.tabPanel === key);
      });

      // 🔥 FIX hidden-tab swiper sizing
      const activePanel = document.querySelector(
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

  /* =========================
     PRODUCT SWIPERS
     ========================= */
  document.querySelectorAll(".mySwiper").forEach(swiperEl => {

    if (swiperEl.classList.contains("swiper-initialized")) return;

    const panelEl = swiperEl.closest(".tab-panel");
    if (!panelEl) return;

    const slidesCount = swiperEl.querySelectorAll(".swiper-slide").length;
    const MAX_SLIDES_PER_VIEW = 3;
    const canLoop = slidesCount > MAX_SLIDES_PER_VIEW;

    const prevBtn = panelEl.querySelector(".arrow.prev");
    const nextBtn = panelEl.querySelector(".arrow.next");

    new Swiper(swiperEl, {
      observer: true,
      observeParents: true,

      spaceBetween: 20,
      speed: 800,
      loop: canLoop,

      autoplay: canLoop ? {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } : false,

      breakpoints: {
        0:    { slidesPerView: 1 },
        576:  { slidesPerView: 2 },
        992:  { slidesPerView: MAX_SLIDES_PER_VIEW },
        1200: { slidesPerView: MAX_SLIDES_PER_VIEW },
      },

      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
    });

    if (!canLoop) {
      prevBtn?.setAttribute("disabled", true);
      nextBtn?.setAttribute("disabled", true);
    }
  });

  /* =========================
     GROUP SWIPERS (INSIDE TABS)
     ========================= */
  document.querySelectorAll(".mySwipergroup").forEach(groupSwiper => {

    if (groupSwiper.classList.contains("swiper-initialized")) return;

    const panelEl =
      groupSwiper.closest(".tab-panel") ||
      groupSwiper.closest("section");

    if (!panelEl) return;

    const slidesCount = groupSwiper.querySelectorAll(".swiper-slide").length;
    const MAX_SLIDES_PER_VIEW = 1;
    const canLoop = slidesCount > MAX_SLIDES_PER_VIEW;

    const prevBtn = panelEl.querySelector(".arrow.prev");
    const nextBtn = panelEl.querySelector(".arrow.next");

    new Swiper(groupSwiper, {
      observer: true,
      observeParents: true,

      slidesPerView: 1,
      spaceBetween: 40,
      speed: 800,
      loop: canLoop,

      autoplay: canLoop ? {
        delay: 3000,
        disableOnInteraction: false,
      } : false,

      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
    });

    if (!canLoop) {
      prevBtn?.setAttribute("disabled", true);
      nextBtn?.setAttribute("disabled", true);
    }
  });

});
