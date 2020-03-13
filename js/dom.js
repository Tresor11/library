// eslint-disable-next-line no-unused-vars
function render() {
  let tableRows = '';
// eslint-disable-next-line no-undef
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