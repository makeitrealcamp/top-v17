const { addBookHandler, getAllBooksHandler, getSingleBookHandler } = require('./book/book.controller')
const { createAccountHandler, logInUserHandler } = require('./user/user.controller')

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    allBooks: getAllBooksHandler,
    book: getSingleBookHandler,
  },
  Mutation: {
    addBook: addBookHandler,
    logInUser: logInUserHandler,
    createAccount: createAccountHandler,
  }
}

module.exports = resolvers;
