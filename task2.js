
const text = "Glow Naturally with Sayantika GlowCare";
let i = 0;
const speed = 100;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("hero-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}
window.onload = typeEffect;

const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.classList.add('visible');
    }
  });
});


const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
