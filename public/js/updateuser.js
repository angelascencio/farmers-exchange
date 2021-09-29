
  
  const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#user-name').value.trim();
    const location = document.querySelector('#location').value.trim();
    const business = document.querySelector('#business').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const passwordConfirm = document.querySelector('#password-confirm').value.trim();
  
    if (userName && location && business && email && password && passwordConfirm) {
      if (password === passwordConfirm) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ userName, location, business, email, password, passwordConfirm}),
        headers: { 'Content-Type': 'application/json' },
      })
      
  
      if (response.ok) {
        document.location.replace('/'); // ------ change to the correct route ------ //
      } else {
        alert('Failed to sign up.');
      }
    } else {
      alert('Failed to sign up.')  // -------- make this a non alert ------//
    };
    }
  };
  
  document
    .querySelector('.sign-in').addEventListener('click', updateFormHandler);
  