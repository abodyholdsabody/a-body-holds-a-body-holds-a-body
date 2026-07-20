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