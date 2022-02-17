const { addNewBook, getAllBooks, getSingleBook } = require('./book.service')

async function addBookHandler(parent, args) {
  const { title, author } = args.input;
  const book = await addNewBook({ title, author });
  return book;
}

async function getAllBooksHandler() {
  const books = await getAllBooks();
  return books;
}

async function getSingleBookHandler(parent, args) {
  const { title } = args;
  const book = await getSingleBook(title);
  return book;
}

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getSingleBookHandler,
}
