export default `
  type Query {
      books(filter: String, val: String): [Book] 
    }
  type Book { 
      title: String, 
      author: String,
      id: Int 
    }
`;