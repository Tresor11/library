let myLibrary = [];

function Book(title, description, category, author, pages, read) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype = {
    constructor: Book,
    hasBeenRead(){
       this.read ? "read" :"Not yet read"
    }
}

function addBookToLibrary() {
    // do stuff here
}