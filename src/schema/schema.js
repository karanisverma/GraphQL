export default `
  type Mutation {
    addBook(author: String, bookName: String): Book
  }
  type Query {
      books(filter: String, val: String): [Book] 
    }
  type Book { 
      title: String, 
      author: String
    }
`;