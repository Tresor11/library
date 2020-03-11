const myLibrary = [];

function Book(title, category, author, pages, read) {
  this.title = title;
  this.description = description;
  this.category = category;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.hasBeenRead = function() {
  return this.read ? "read" : "Not yet read";
};

myLibrary.forEach( book => {
  Object.setPrototypeOf(book, Book.prototype);
});
function updateBooks(arr) {
  window.localStorage.setItem("library", JSON.stringify(arr));
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("status").checked;
  const new_book = new Book(title, category, author, pages, read);
  myLibrary.push(new_book);
 
  updateBooks(myLibrary);

  document.forms[0].reset();
  displayN();
  secondTable.innerHTML = "";
  render();
  console.warn("added", { myLibrary });
  window.localStorage.setItem("library", JSON.stringify(myLibrary));
}

document.addEventListener("DOMContentLoaded", () => { document  .getElementById("add-book")
    .addEventListener("click", addBookToLibrary);
});

const table = document.getElementById('books-library');

function render () {

}

const submit = document.getElementById("send");
const modal = document.getElementById("modal");

function displayB() {
  modal.style.display = "block";
}

function displayN() {
  modal.style.display = "none";
}
