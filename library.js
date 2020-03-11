const myLibrary = [];

function Book(title, category, author, pages, read) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("status").checked;
    const new_book = new Book(title, category, author, pages, read);
    myLibrary.push(new_book);
    console.log(myLibrary);
}

const submit = document.getElementById("send");
const modal = document.getElementById("modal");

function displayB() {
    modal.style.display = "block";
}

function displayN() {
    modal.style.display = "none";
}