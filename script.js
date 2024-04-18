document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();   
 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'mio' && password === '123') {
      // Successful login
      document.getElementById('message').textContent = 'Login Successful!'; 
      window.location.href="home.html"
    } else {
      // Failed login
      document.getElementById('message').textContent = 'Invalid username or password.';
    }
  });