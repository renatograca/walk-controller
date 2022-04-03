const { MongoClient } = require('mongodb');
require('dotenv/config');

const { MONGO_URI } = process.env;

async function connection(collection) {
  const mongoConnection = await MongoClient.connect(MONGO_URI);
  return mongoConnection.db('carteira').collection(collection);
}

module.exports = connection;
