
  const PRICE_PER_ITEM = 895;

  document.querySelectorAll('#thumbs img').forEach(img => {
    img.addEventListener('click', function() {
      changeImage(img);
    })
   
  });

  function changeImage(el) {
    const mainImage = document.getElementById('mainImage');
    if (!mainImage) return;

    // Update main image
    mainImage.src = el.src;

    // Remove active class from all thumbnails
    // ✅ Remove active class from all thumbnails
    document.querySelectorAll('#thumbs img').forEach(img => {
      img.classList.remove('active');
    });
    // Add active class to clicked thumbnail
    el.classList.add('active');
  }

  function qty(step) {
    const input = document.querySelector('.qty-box input');
    const totalEl = document.querySelector('.total-price');

    if (!input || !totalEl) return;

    let val = parseInt(input.value, 10);

    if (isNaN(val)) val = 1;

    val = Math.max(1, val + step);
    input.value = val;

    const totalPrice = val * PRICE_PER_ITEM;
    totalEl.innerText = '$' + totalPrice.toLocaleString() + '.00';
  }



  // SET TARGET DATE HERE
  const targetDate = new Date("2026-03-01T00:00:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
  }

  setInterval(updateTimer, 1000);
  updateTimer();