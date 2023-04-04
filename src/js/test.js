// start job
// examlpe
// метод setTimeout()
// ======================================
// const myTimeout = setTimeout(myGreeting, 3000);
// function myGreeting() {
//   document.getElementById('demo').innerHTML = 'Happy Birthday!';
// }

// // це ми звикли записуавти так
// const firstGreiting = setTimeout(myGreetingFirst, 5000);
// const myTimeoutStar = document.querySelector('#demo');
// function myGreetingFirst() {
//   // console.log(myGreetingFirst);
//   myTimeoutStar.innerHTML = 'Happy Birthday Jake!';
// }
// =======================================
// setInterval

// const element = document.querySelector(".forSetInterval");
// setInterval(function() {element.innerHTML += "Hello"}, 1000);

// setInterval(displayHello, 1000);

// function displayHello() {
//     document.querySelector("#demo").innerHTML += "Hello";
// }

// =======================================

// const button = document.querySelector('button');

// const onClick = () => {
//   setTimeout(() => {
//     alert('I love async JS!');
//   }, 2000);
// };

// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener('click', onClick);
// =======================================

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});

// =======================================
