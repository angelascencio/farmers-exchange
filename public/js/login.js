const loginFormHandler = async (event) => {
  event.preventDefault();

  const emailLogin = document.querySelector('#email-login').value.trim();
  const passwordLogin = document.querySelector('#password-login').value.trim();

  if (emailLogin && passwordLogin) {
    const response = await fetch('/api/users/login', {    // ------ change to the correct route ------ //
      method: 'POST',
      body: JSON.stringify({ emailLogin, passwordLogin }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');   // ------ change to the correct route ------ //
    } else {
      alert('Failed to log in.');
    }
  }
};

// ----------------- LOG OUT SECTION still under construction --------------------//
const logout = async () => {
  const response = await fetch('/api/users/logout', {   // ------ change to the correct route ------ //
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');   // ------ change to the correct route ------ //
  } else {
    alert('Failed to log out.');
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#user-name').value.trim();
  const location = document.querySelector('#location').value.trim();
  const business = document.querySelector('#business').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const passwordConfirm = document.querySelector('#password-confirm').value.trim();

  if (userName && lastName && streetAddress && location && state && business && email && password && passwordConfirm) {
    if (password === passwordConfirm) {
    const response = await fetch('/api/users', {  // ------ change to the correct route ------ //
      method: 'POST',
      body: JSON.stringify({ userName, location, business, email, password, passwordConfirm}),
      headers: { 'Content-Type': 'application/json' },
    })
    } else {
      alert('Failed to sign up.')  // -------- make this a non alert ------//
    };

    if (response.ok) {
      document.location.replace('/'); // ------ change to the correct route ------ //
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.sign-in').addEventListener('submit', loginFormHandler);

// ------ not finished ------ //
document            
  .querySelector('#logout').addEventListener('click', logout);

document
  .querySelector('.new-account').addEventListener('submit', signupFormHandler);
