// modal
const btn = document.getElementById('myBtn');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const btnSign = document.getElementById('myBtn-registr');
const modalSign = document.getElementById('myModalSignUp');
const spanSign = document.getElementsByClassName('closeSign')[0];

btnSign.onclick = function () {
  modalSign.style.display = 'block';
};

spanSign.onclick = function () {
  modalSign.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modalSign) {
    modalSign.style.display = 'none';
  }
};



const registrationForm = document.getElementById('myModalSignUp');

registrationForm.addEventListener('submit', event => {
  event.preventDefault();

  const username = document.getElementById('usernameSign').value;
  const password = document.getElementById('passwordSign').value;

  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  alert('Registration successful!');
  modalSign.style.display = 'none';
});
const btnTest = document.getElementById('test');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (
    username === localStorage.getItem('username') &&
    password === localStorage.getItem('password')
  ) {
    alert('Login successful!');
    modal.style.display = 'none';
    // додатковий код для продовження перегляду функціоналу сайту
    // тепер запишемо це в localStorage
    localStorage.setItem('isLoggedIn', true);

  } else {
    alert('Invalid username or password!');
    modal.style.display = 'none';
  }
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});




btnTest.addEventListener('click', event => {
    event.preventDefault();
    // Перевірка статусу входу
if (localStorage.getItem('isLoggedIn') === 'true') {
    window.open('https://www.youtube.com/watch?v=QH2-TGUlwu4', '_blank');
  } else {
    alert('Please log in first.');
  }
});



window.openRegistrationModal = function(event) {
    event.preventDefault();
    const loginModal = document.getElementById('myModal');
    const registrationModal = document.getElementById('myModalSignUp');
      
    loginModal.style.display = 'none';
    registrationModal.style.display = 'block';
  };
  const registrationLink = document.getElementById('myBtn-registr');
  registrationLink.addEventListener('click', openRegistrationModal);

