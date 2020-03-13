const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.id = myLibrary.length;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const modal = document.getElementById('modal');

function displayN() {
  modal.style.display = 'none';
}

function displayB() {
  modal.style.display = 'block';
}

// eslint-disable-next-line no-unused-vars
function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').checked;
  const newBook = new Book(title, author, pages, status);
  if (title === '' || author === '' || pages === '') {
    document.getElementById('alert-user').style.display = 'block';
    displayB();
    return false;
  }
  document.getElementById('form').reset();
  myLibrary.push(newBook);
  displayN();
// eslint-disable-next-line no-undef
  render();
  return 0;
}

// eslint-disable-next-line no-unused-vars
function changeStatus(id) {
  myLibrary.forEach(book => {
    if (book.id === id) {
      book.status = !book.status;
    }
  });
// eslint-disable-next-line no-undef
  render();
}

// eslint-disable-next-line no-unused-vars
function deleteBook(id) {
  myLibrary.forEach(book => {
    if (book.id === id) {
      myLibrary.splice(myLibrary.indexOf(book), 1);
    }
  });
// eslint-disable-next-line no-undef
  render();
}
