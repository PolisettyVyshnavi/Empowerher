let books = [];
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const sortAZ = document.getElementById("sortAZ");
const sortZA = document.getElementById("sortZA");
const filterCategory = document.getElementById("filterCategory");

const imageUrl = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

// Add Book
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;

  const book = { title, author, category, imageUrl };
  books.push(book);
  renderBooks(books);
  bookForm.reset();
});

// Render Books
function renderBooks(bookArray) {
  bookList.innerHTML = "";
  bookArray.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${book.imageUrl}" alt="Book Image">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Category: ${book.category}</p>
      <button onclick="deleteBook(${index})">Delete</button>
    `;
    bookList.appendChild(card);
  });
}

// Delete Book
function deleteBook(index) {
  books.splice(index, 1);
  renderBooks(books);
}

// Sort
sortAZ.addEventListener("click", () => {
  books.sort((a, b) => a.title.localeCompare(b.title));
  renderBooks(books);
});
sortZA.addEventListener("click", () => {
  books.sort((a, b) => b.title.localeCompare(a.title));
  renderBooks(books);
});

// Filter
filterCategory.addEventListener("change", () => {
  const category = filterCategory.value;
  if (category === "All") {
    renderBooks(books);
  } else {
    renderBooks(books.filter(book => book.category === category));
  }
});