import Notiflix from "notiflix";
  
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  if (shouldResolve) {
    // Fulfill
    resolve({ position, delay });
  } else {
    // Reject
    reject({ position, delay });
  }
}, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
 const  {
    elements: { delay, step, amount },
  } = event.currentTarget;
  let inputDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i ++ ) {
    createPromise(i, inputDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    inputDelay += Number(step.value);
    // console.log(inputDelay);
  }

  // console.log(delay.value);
  // console.log(step.value);
  // console.log(amount.value);
}




 