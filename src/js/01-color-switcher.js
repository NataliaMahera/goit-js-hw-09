const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
startBtn.addEventListener('click', startChangeColorBtn);
stopBtn.addEventListener('click', stopChangeColorBtn);

function startChangeColorBtn() {
  startBtn.disabled = true;

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColorBtn() {
  startBtn.disabled = false;
  clearInterval(timerId);
}
