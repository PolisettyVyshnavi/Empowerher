import { Navbar } from './navbar.js';
import { Footer } from './footer.js';

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
});