const { StatusCodes } = require('http-status-codes');
const { WalkService } = require('../services/carteira');

function WalkController() {
  const walkService = WalkService();

  async function addWalk(req, res) {
    const { body } = req;
    const result = await walkService.addWalk(body);
    return res.status(StatusCodes.CREATED).json(result);
  }

  async function getWalk(req, res) {
    const result = await walkService.getWalk();
    return res.status(StatusCodes.OK).json(result);
  }

  async function deleteWalk(req, res) {
    walkService.deleteWalk();
    return res.status(StatusCodes.OK).json({ message: 'Carteira deletada' });
  }

  return {
    addWalk,
    getWalk,
    deleteWalk,
  };
}

module.exports = { WalkController };
