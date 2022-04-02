const connection = require('../models/connection');

function WalkRepository() {
  async function earnings() {
    return (await connection()).collection('earnings');
  }

  async function addWalk(value) {
    (await earnings()).insertOne({ value });

    return 'Valor adicionado com sucesso';
  }

  async function getWalk() {
    return (await earnings()).find().toArray();
  }

  async function deleteWalk() {
    return (await earnings()).deleteMany({});
  }

  return {
    addWalk,
    getWalk,
    deleteWalk,
  };
}

module.exports = { WalkRepository };
