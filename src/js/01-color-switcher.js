function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null; 

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor(); 
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  bodyEl.style.backgroundColor = getRandomHexColor();
  btnStart.disabled = false;
  btnStop.disabled = true;
});

btnStart.classList.add('btn');
btnStop.classList.add('btn');














