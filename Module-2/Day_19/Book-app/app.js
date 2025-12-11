const bookList = document.getElementById("bookList");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// ADD BOOK
document.getElementById("addBookForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const book = {
    title: title.value,
    author: author.value,
    price: Number(price.value),
    coverImageURL: imageURL.value,
  };

  db.collection("books").add(book).then(() => {
    alert("Book Added!");
  });

  e.target.reset();
});

// REALTIME FETCH (Auto UI Update)
db.collection("books").onSnapshot((snapshot) => {
  bookList.innerHTML = "";
  
  snapshot.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;

    bookList.innerHTML += `
      <div class="book-card">
        <img src="${data.coverImageURL}">
        <h3>${data.title}</h3>
        <p>Author: ${data.author}</p>
        <p>Price: ₹${data.price}</p>

        <button onclick="updateAuthor('${id}', '${data.author}')">Update Author</button>
        <button onclick="deleteBook('${id}')">Delete</button>
        <button onclick="viewDetails('${data.title}','${data.author}','${data.price}','${data.coverImageURL}')">View Details</button>
      </div>
    `;
  });
});

// UPDATE AUTHOR
function updateAuthor(id, oldAuthor) {
  const newAuthor = prompt("Enter new author name:", oldAuthor);
  if (newAuthor) {
    db.collection("books").doc(id).update({ author: newAuthor });
  }
}

// DELETE BOOK
function deleteBook(id) {
  db.collection("books").doc(id).delete();
}

// MODAL VIEW
function viewDetails(title, author, price, image) {
  modal.style.display = "block";
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalAuthor").innerText = author;
  document.getElementById("modalPrice").innerText = price;
  document.getElementById("modalImage").src = image;
}

closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (e) => e.target == modal ? modal.style.display = "none" : "";