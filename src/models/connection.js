const { MongoClient } = require('mongodb');
require('dotenv/config');

const { MONGO_URI } = process.env;

// const db = null;

async function connection() {
  // db ? Promise.resolve(db)
  //   :
  const mongoConnection = await MongoClient.connect(MONGO_URI);
  const dbConnection = mongoConnection.db('carteira');

  return dbConnection;
}

module.exports = connection;
