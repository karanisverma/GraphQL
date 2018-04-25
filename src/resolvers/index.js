import {getBooks, getBooksByAuthor, getBooksByTitle} from '../connectors'
export default {
  Query: {
    books(_, args, ctx) {
    return getBooks(args.filter, args.val)
    },
  },
};