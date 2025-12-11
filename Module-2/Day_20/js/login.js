import { Navbar } from './navbar.js';
import { Footer } from './footer.js';

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === username && user.password === password) {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "todos.html";
  } else {
    alert("Invalid credentials!");
  }
});