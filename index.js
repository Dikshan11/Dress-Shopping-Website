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

//Image slider
// Image slider (only if this page has a slider)
const slider = document.getElementById("slider-images");
const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");
if (slider && slideLeft && slideRight) {
  let index = 0;
  const updateSlider = () => {
    slider.style.transform = `translateX(-${index * 25}%)`;
  };
  slideRight.addEventListener("click", () => {
    index = (index + 1) % slider.children.length;
    updateSlider();
  });
  slideLeft.addEventListener("click", () => {
    index = (index - 1 + slider.children.length) % slider.children.length;
    updateSlider();
  });
}


