import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix';

const inputDateTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let intervalId = null;
let currentDate = null;
let selectedDate = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      // return window.alert('Please choose a date in the future');
      Report.failure('Failure', 'Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      selectedDate = selectedDates[0].getTime();
      Report.success(
        'Notiflix Success',
        'Okay, press the start button to start counting timer'
      );
    }
  },
};

flatpickr(inputDateTimePicker, options);

const onStartBtn = () => {
  intervalId = setInterval(() => {
    currentDate = Date.now();
    const deltaTime = selectedDate - currentDate;

    if (deltaTime <= 0) {
      return clearInterval(intervalId);
    }
    createMarkup(convertMs(deltaTime));
  }, 1000);
};

startBtn.addEventListener('click', onStartBtn);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  createMarkup({ days, hours, minutes, seconds });

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function createMarkup({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minutesEl.textContent = `${minutes}`;
  secondsEl.textContent = `${seconds}`;
}
