const express = require('express');
const {  ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose');

const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

async function startServer () {
  const app = express();

  await mongoose.connect('mongodb://localhost:27017/graphql-book-store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log('Connected to MongoDB')

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send('Hello world!')
  })

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000/graphql`)
  );
}

setImmediate(startServer)
