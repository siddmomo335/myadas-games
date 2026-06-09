const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const audio = document.getElementById('bg-audio');
if (audio) {
  audio.addEventListener('play', () => {
    audio.volume = 0.8;
  });
}
