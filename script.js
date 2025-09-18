const images = [
  { src: "images/photo1.tif", desc: "Description for photo 1" },
  { src: "images/photo2.tif", desc: "Description for photo 2" },
  { src: "images/photo3.tif", desc: "Description for photo 3" }
];
let currentIndex = 0;
function updateCarousel() {
  const img = document.getElementById("carousel-image");
  const desc = document.getElementById("carousel-description");
  img.src = images[currentIndex].src;
  desc.textContent = images[currentIndex].desc;
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function updateIndicators() {
  const indicators = document.getElementById("carousel-indicators");
  indicators.innerHTML = "";
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "indicator-dot" + (index === currentIndex ? " active" : "");
    dot.onclick = () => {
      currentIndex = index;
      updateCarousel();
    };
    indicators.appendChild(dot);
  });
}
window.onload = updateCarousel;
