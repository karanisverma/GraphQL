import {getBooks, 
        getBooksByAuthor, 
        getBooksByTitle,
        addBook
      } from '../connectors'

export default {
  Query: {
    books(_, args, ctx) {
    return getBooks(args.filter, args.val)
    },
  },
  Mutation: {
    addBook(_, args, ctx) {
      return addBook(args)
    }
  }
};