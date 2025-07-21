// Slider Logic
let currentSlide = 0;
const slider = document.getElementById('slider');

function moveSlide(direction) {
  const totalSlides = slider.children.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('translate-x-full');
}