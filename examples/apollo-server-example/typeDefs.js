const { gql } = require('apollo-server-express');

const typeDefs = gql`
  "This 'Book' type defines the queryable fields for every book in our data source"
  type Book {
    _id: ID!
    "The title of the book"
    title: String!
    "The author of the book"
    author: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    hello: String!

    "A list of all books in the data source"
    allBooks: [Book]!

    "A single book in the data source"
    book(title: String!): Book
  }

  input BookInput {
    title: String!
    author: String!
  }

  type Mutation {
    "Add a new book to the data source"
    addBook(input: BookInput!): Book
    #addBook(title: String!, author: String!): Book

  }

  enum BookType {
    BOOK
    MAGAZINE
  }
`

module.exports = typeDefs;
