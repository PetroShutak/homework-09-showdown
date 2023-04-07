// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

Notiflix.Report.success('Title', 'Message', 'Button Text');

Notiflix.Report.failure('Title', 'Message', 'Button Text');

Notiflix.Report.warning('Title', 'Message', 'Button Text');

Notiflix.Report.info('Title', 'Message', 'Button Text');

const refs = {
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



















// // import Notiflix from 'notiflix';
// import flatpickr from 'flatpickr'; // імпорт бібліотеки

// import 'flatpickr/dist/flatpickr.min.css'; // імпорт стилів

// import { Report } from 'notiflix/build/notiflix-report-aio'; // імпорт бібліотеки

// const refs = { // створення посилань на елементи
//   body: document.querySelector('body'), // body
//   dateInput: document.querySelector('input#datetime-picker'), // input
//   btnStartTimer: document.querySelector('[data-start]'), // button
//   daysRemaining: document.querySelector('[data-days]'), // span
//   hoursRemaining: document.querySelector('[data-hours]'), // span
//   minutesRemaining: document.querySelector('[data-minutes]'), // span
//   secondsRemaining: document.querySelector('[data-seconds]'), // span
// };

// refs.body.style.backgroundColor = '#ece5da'; // стилізація body
// refs.btnStartTimer.disabled = true; // деактивація кнопки
// refs.btnStartTimer.addEventListener('click', timerStart); // слухач події на кнопку
// const TIMER_DELAY = 1000; // змінна для інтервалу таймера 
// let timerId = null; // змінна для інтервалу
// let selectedDate = null; // змінна для дати
// let currentDate = null; // змінна для поточної дати
// let remainingTime = 0; // змінна для різниці між датами

// const options = { // налаштування flatpickr
//   enableTime: true, // включити час
//   time_24hr: true, // 24 годинний формат
//   defaultDate: new Date(), // дата за замовчуванням
//   minuteIncrement: 1, // крок вибору хвилин
//   onClose(selectedDates) { // функція при закритті календаря
//     onDateCheck(selectedDates); // виклик функції onDateCheck яка приймає масив з датами які були вибрані
//   },
// };

// flatpickr(refs.dateInput, options);  // ініціалізація flatpickr з передачею посилання на елемент і налаштувань це взято з документації

// Report.info('✌🏻 Hello, my Friend!', 'Choose a date and click on start', 'Ok'); // ініціалізація Notiflix

// function onDateCheck(selectedDates) { // функція яка приймає масив з датами які були вибрані
//   selectedDate = selectedDates[0].getTime(); // вибрана дата перетворюється в мілісекунди. Це потрібно для розрахунку різниці між датами
//   currentDate = new Date().getTime(); // поточна дата перетворюється в мілісекунди. Це потрібно для розрахунку різниці між датами

//   if (selectedDate > currentDate) { // перевірка чи вибрана дата більша за поточну
//     refs.btnStartTimer.disabled = false; // активація кнопки
//     Report.success( // виклик Notiflix
//       '⏱ Are you ready? Click on start!',
//       '" The distance between dreams and reality is called action " - Arina B.',
//       'Ok'
//     );
//     return; // вихід з функції
//   }
//   Report.failure( // виклик Notiflix
//     '❗️ Error...',
//     'Please, choose a date in the future and remember: "Only forward to our victory!"',
//     'Ok'
//   );
// }

// function timerStart() { // функція яка запускає таймер
//   timerId = setInterval(() => { // ми використовуємо setInterval для того щоб таймер працював постійно і не зупинявся
//     currentDate = new Date().getTime(); // тут ми викликаємо поточну дату щоб вона була актуальною
//     if (selectedDate - currentDate < 1000) { // перевірка чи вибрана дата більша за поточну
//       clearInterval(timerId); // якщо вибрана дата менша за поточну то ми очищаємо інтервал
//       refs.btnStartTimer.disabled = true; // деактивація кнопки
//       refs.dateInput.disabled = false; // активація input
//       Report.info( // виклик Notiflix з інформацією про кінець таймера
//         '✅ The End! Timer stopped!',
//         'Please, if you want to start timer, choose a date and click on start or reload this page',
//         'Ok'
//       );
//       return; // вихід з функції
//     } else { // якщо вибрана дата більша за поточну то ми викликаємо функцію createMarkup яка приймає об'єкт з розрахунками
//       refs.btnStartTimer.disabled = true; // деактивація кнопки
//       refs.dateInput.disabled = true; // деактивація input
//       currentDate += 1000; // додаємо 1 секунду до поточної дати
//       remainingTime = Math.floor(selectedDate - currentDate); // різниця між вибраною датою і поточною датою перетворюється в мілісекунди і округлюється
//       convertMs(remainingTime); // виклик функції яка перетворює мілісекунди в дні, години, хвилини і секунди
//     }
//   }, TIMER_DELAY); // TIMER_DELAY це змінна яка містить 1000 мілісекунди це потрібно для того щоб таймер працював постійно і не зупинявся
// }

// function createMarkup({ days, hours, minutes, seconds }) { // функція яка приймає об'єкт з розрахунками і вставляє їх в розмітку
//   refs.daysRemaining.textContent = days; // вставляємо дні в розмітку
//   refs.hoursRemaining.textContent = hours; // вставляємо години в розмітку
//   refs.minutesRemaining.textContent = minutes;  // вставляємо хвилини в розмітку
//   refs.secondsRemaining.textContent = seconds;  // вставляємо секунди в розмітку
// }
// // Shutak P. FS76 Online 
// function addLeadingZero(value) { // функція яка додає 0 перед числом для  того щоб відображалось 01, 02, 03, 04, 05, 06, 07, 08, 09, 10
//   return String(value).padStart(2, '0'); 
// }

// function convertMs(ms) { // функція яка перетворює мілісекунди в дні, години, хвилини і секунди
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = addLeadingZero(Math.floor(ms / day));
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );
//   createMarkup({ days, hours, minutes, seconds }); 
//   return { days, hours, minutes, seconds }; // повертаємо об'єкт з розрахунками 
// }

// // title-startTimer
// function timerStart() { // функція яка запускає таймер і відображає його в title
//   timerId = setInterval(() => { // ми використовуємо setInterval для того щоб таймер працював постійно і не зупинявся
//     currentDate = new Date().getTime(); // тут ми викликаємо поточну дату щоб вона була актуальною
//     if (selectedDate - currentDate < 1000) { // перевірка чи вибрана дата більша за поточну
//       clearInterval(timerId); // якщо вибрана дата менша за поточну то ми очищаємо інтервал
//       refs.btnStartTimer.disabled = true; // деактивація кнопки
//       refs.dateInput.disabled = false; // активація input
//       document.title = "Timer Ended"; // встановлення title
//       Report.info( // виклик Notiflix з інформацією про кінець таймера
//         '✅ The End! Timer stopped!', 
//         'Please, if you want to start timer, choose a date and click on start or reload this page',
//         'Ok'
//       );
//       return;
//     } else {
//       refs.btnStartTimer.disabled = true; // деактивація кнопки
//       refs.dateInput.disabled = true;
//       currentDate += 1000;  // додаємо 1 секунду до поточної дати
//       remainingTime = Math.floor(selectedDate - currentDate); // різниця між вибраною датою і поточною датою перетворюється в мілісекунди і округлюється
//       const { days, hours, minutes, seconds } = convertMs(remainingTime); // виклик функції яка перетворює мілісекунди в дні, години, хвилини і секунди
//       document.title = `${days}:${hours}:${minutes}:${seconds}`; // встановлення title з розрахунками
//       createMarkup({ days, hours, minutes, seconds }); // виклик функції яка приймає об'єкт з розрахунками і вставляє їх в розмітку
//     }   
//   }, TIMER_DELAY); // TIMER_DELAY це змінна яка містить 1000 мілісекунди це потрібно для того щоб таймер працював постійно і не зупинявся
// }

