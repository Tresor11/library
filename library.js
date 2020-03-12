const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.id = myLibrary.length;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function render() {
  let tableRows = '';

  myLibrary.forEach(book => {
    tableRows += `<tr>
<th scope='row' class='text-center'><span class='badge badge-primary'>${
  book.id
}</span></th>
<th class='text-center'> ${book.title}</th>
<th class='text-center'>${book.author}</th>
<th class='text-center'>${book.pages}</th>
<th class='text-center'><button type='button' class='btn btn-outline-primary' onclick='changeStatus(${
  book.id
})'>
  ${book.status ? 'Read' : 'Not read'}
</button>
</th>
<th class='text-center'><button type='button' class='btn btn-outline-danger' onclick='deleteBook(${
  book.id
})'>
Delete
</button></th>
</tr>`;
  });
  document.getElementById('table-body').innerHTML = tableRows;
}

const modal = document.getElementById('modal');

function displayN() {
  modal.style.display = 'none';
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').checked;
  const newBook = new Book(title, author, pages, status);
  if (title === '') {
    window.alert('please provide a title');
    title.focus();
    return false;
  }
  myLibrary.push(newBook);
  displayN();
  render();
  return 0;
}

function changeStatus(id) {
  myLibrary.forEach(book => {
    if (book.id === id) {
      book.status = !book.status;
    }
  });
  render();
}

function deleteBook(id) {
  myLibrary.forEach(book => {
    if (book.id === id) {
      myLibrary.splice(myLibrary.indexOf(book), 1);
    }
  });
  render();
}

function displayB() {
  modal.style.display = 'block';
}
