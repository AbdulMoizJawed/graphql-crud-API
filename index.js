const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')

const MONGODB = process.env.MONGOURL

// ApolloServer
// typedefs:graphql type definitions
// Resolvers: how do we resolve Queries/mutations

const typeDefs = require('./graphql/typeDefs.js')
const resolvers = require('./graphql/resolvers.js')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB,{useNewUrlParser: true})
.then(() => {
  console.log("MongoDB conncetion Successfull")
  return server.listen({port: 5000})
})
.then((res) => {
    console.log(`server running at ${res.url}`)
  
})