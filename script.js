const carousel = document.getElementById('carousel');

const scrollSpeed = 2;
const ease = 1;
const maxTargetJump = 900;

let targetX = carousel.scrollLeft;
let currentX = carousel.scrollLeft;
let ticking = false;

function clamp(value, min, max) {
return Math.min(Math.max(value, min), max);
}

function animate() {
currentX += (targetX - currentX) * ease;
carousel.scrollLeft = currentX;

if (Math.abs(targetX - currentX) > 0.5) {
    requestAnimationFrame(animate);
} else {
    currentX = targetX;
    carousel.scrollLeft = currentX;
    ticking = false;
}
}

carousel.addEventListener('wheel', (e) => {
if (e.deltaY === 0) return;
e.preventDefault();

const delta = clamp(e.deltaY * scrollSpeed, - maxTargetJump, maxTargetJump);
const maxScroll = carousel.scrollWidth - carousel.clientWidth;
targetX = clamp(targetX + delta, 0, maxScroll);

if (!ticking) {
    ticking = true;
    requestAnimationFrame(animate);
}
}, { passive: false });





const text = 'A Body Holds ';
const track = document.getElementById('scrolling-track');

const copies = 20;
const segment = (text).repeat(copies); 

const textSpeed = 100;

track.innerHTML = `<span>${segment}</span><span>${segment}</span>`;

function startLoop() {
  const halfWidth = track.scrollWidth / 2;
  const duration = halfWidth / textSpeed;

  track.animate(
    [
      { transform: 'translateX(0)' },
      { transform: `translateX(-${halfWidth}px)` }
    ],
    {
      duration: duration * 1000,
      iterations: Infinity,
      easing: 'linear'
    }
  );
}

window.addEventListener('load', startLoop);