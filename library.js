const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.id = myLibrary.length
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function render() {
    let tableRows = ''

    myLibrary.forEach(book => {
        tableRows += `<tr>
		<th scope="row">${book.id}</th>
		<td class="text-center">${book.title}</td>
		<td class="text-center">${book.author}</td>
		<td class="text-center">${book.pages}</td>
		<td class="text-center"><button type="button" onclick="changeStatus(${book.id})">
		${book.status? 'Read':'Not read'}
		</button>
		</td>
		<td class="text-center"><button type="button" onclick="deleteBook(${book.id})">
		Delete
		</button></td>
</tr>`
    })
    document.getElementById("table-body").innerHTML = tableRows;
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").checked;
    const newBook = new Book(title, author, pages, status);
    if (title == '') {
        window.alert("please provide a title")
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
        if (book.id == id) {
            book.status = !book.status
        }
    })
    render();
}

function deleteBook(id) {
    myLibrary.forEach(book => {
        if (book.id == id) {
            myLibrary.splice(myLibrary.indexOf(book), 1)
        }
    })
    render()
}

const modal = document.getElementById("modal");

function displayB() {
    modal.style.display = "block";
}

function displayN() {
    modal.style.display = "none";
}