const {gql} = require('apollo-server-express');


const typeDefs = gql`
    type Query {
        me: User
    }

input bookInf {
    author: [String]
    description: String
    title: String
    image: String
    link: String
    bookId: String
}

type Book {
    bookId: String
    authors: [String]
    title: String
    link: String
    iamge: String
}


  type User {
    _id: ID
    bookNum: Int
    username: String
    email: String
    savedBooks: [Book]
  }



   type Auth {
    token: ID!
    user: User
   }



   module.exports = typeDefs;



`