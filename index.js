// Selecting menubar

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("close-nav")

menuicon.addEventListener("click", function () 
{
    sidenav.style.right="0px";
}
)

closeNav.addEventListener("click", function () 
{
    sidenav.style.right="-50%";
}
)

// Offer tab 

document.getElementById("close").addEventListener("click", function () {
    document.getElementById("offerTab").style.display = "none";
  });

// Slider Logic
let currentSlide = 0;
const slider = document.getElementById('slider-images');

function moveSlide(direction) {
  const totalSlides = slider.children.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}



