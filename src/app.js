const express = require('express');
const { WalkController } = require('./controllers/carteira');

require('dotenv/config');

const app = express();
const port = process.env.PORT || 3001;

const walkController = WalkController();

app.use(express.json());

app.post('/walk', walkController.addWalk);
app.get('/walk', walkController.getWalk);
app.delete('/walk', walkController.deleteWalk);

app.listen(port, () => console.log(`Serviço online na porta ${port}!`));
