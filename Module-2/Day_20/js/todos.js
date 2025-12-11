import { Navbar } from './navbar.js';
import { Footer } from './footer.js';
import { displayTodos } from './displayTodos.js';

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "login.html";
} else {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayTodos(data.slice(0, 10))) // show first 10 todos
    .catch(err => console.error(err));
}