// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);
  
//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;
  
//       if (isSuccess) {
//         onSuccess("success value");
//       } else {
//         onError("error");
//       }
//     }, 2000);
//   };
  
//   const onFetchSuccess = user => {
//     console.log(user);
//   };
  
//   const onFetchError = error => {
//     console.error(error);
//   };
  
  // fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

  // const fetchUserFromServer = username => {
  //   return new Promise((resolve, reject) => {
  //     console.log(`Fetching data for ${username}`);
  
  //     setTimeout(() => {
  //       // Change value of isSuccess variable to simulate request status
  //       const isSuccess = true;
  
  //       if (isSuccess) {
  //         resolve("success value");
  //       } else {
  //         reject("error");
  //       }
  //     }, 2000);
  //   });
  // };
  
  // fetchUserFromServer("Mango")
  //   .then(user => console.log(user))
  //   .catch(error => console.error(error));

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });