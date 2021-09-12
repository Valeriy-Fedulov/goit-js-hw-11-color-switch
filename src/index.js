import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timeID = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');

btnStartRef.disabled = false;
btnStopRef.disabled = true;

btnStartRef.addEventListener('click', getRndColor);
btnStopRef.addEventListener('click', stopRndColor);

function getRndColor() {
  let oldColor;
  let color;
  btnStartRef.disabled = true;
  btnStopRef.disabled = false;

  timeID = setInterval(() => {
    
  while (oldColor === color) {
    color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }
    document.body.style.background = color;
    oldColor = color;
  }, 1000);
}

function stopRndColor() {
  btnStartRef.disabled = false;
  btnStopRef.disabled = true;
  clearInterval(timeID);
}