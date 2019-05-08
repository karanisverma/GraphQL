export default `
  type Mutation {
    addBook(author: String, bookName: String): Book
  }
  type Query {
      books(filter: String, val: String): [Book]
      authors: [Author] 
    }
  type Book { 
      title: String, 
      authors: [Author]
    }
  type Author {
    name: String
    books: [Book]
  }
`;