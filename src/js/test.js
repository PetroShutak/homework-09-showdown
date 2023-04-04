// start job
// examlpe
// метод setTimeout()
// ======================================
const myTimeout = setTimeout(myGreeting, 3000);
function myGreeting() {
  document.getElementById('demo').innerHTML = 'Happy Birthday!';
}

// це ми звикли записуавти так
const firstGreiting = setTimeout(myGreetingFirst, 5000);
const myTimeoutStar = document.querySelector('#demo');
function myGreetingFirst() {
  // console.log(myGreetingFirst);
  myTimeoutStar.innerHTML = 'Happy Birthday Jake!';
}
// =======================================

const button = document.querySelector('button');

const onClick = () => {
  setTimeout(() => {
    alert('I love async JS!');
  }, 2000);
};

// Two seconds after clicking the button,
// alert specified inside the setTimeout callback will appear.
button.addEventListener('click', onClick);
// =======================================
