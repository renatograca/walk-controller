const { WalkService } = require('../services/carteira');

function WalkController() {
  const walkService = WalkService();

  async function addWalk(req, res) {
    const { body } = req;
    console.log(req);
    const result = await walkService.addWalk(body);
    return res.json(result);
  }

  async function getWalk(req, res) {
    const result = await walkService.getWalk();
    return res.json(result);
  }

  async function deleteWalk(req, res) {
    walkService.deleteWalk();
    return res.json({ message: 'Carteira deletada' });
  }

  return {
    addWalk,
    getWalk,
    deleteWalk,
  };
}

module.exports = { WalkController };
