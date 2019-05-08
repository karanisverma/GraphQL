import {getBooks, 
        getBooksByAuthor, 
        getBooksByTitle,
        addBook,
        getAuthors
      } from '../connectors'

export default {
  Query: {
    books(_, args, ctx) {
    return getBooks(args.filter, args.val);
    },
    authors(_, args, ctx) {
      return getAuthors();
    }
  },
  Mutation: {
    addBook(_, args, ctx) {
      return addBook(args);
    }
  }
};