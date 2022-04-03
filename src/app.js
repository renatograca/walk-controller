const express = require('express');
const { WalkController } = require('./controllers/carteira');

require('dotenv/config');

const app = express();

function StartServer() {
  const port = process.env.PORT || 3001;
  const walkController = WalkController();

  function config() {
    app.use(express.json());
  }

  function routers() {
    app.post('/walk', walkController.addWalk);
    app.get('/walk', walkController.getWalk);
    app.delete('/walk', walkController.deleteWalk);
  }

  function start() {
    config();
    routers();
    app.listen(port);
  }

  return {
    start,
  };
}

module.exports = { StartServer };
