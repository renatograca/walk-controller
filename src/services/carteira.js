const { WalkRepository } = require('../repository/carteira');

function WalkService() {
  const walkRepository = WalkRepository();
  async function addWalk(value) {
    if (value < 0) {
      return 'O valor deve ser maior que ZERO';
    }
    return walkRepository.addWalk(value);
  }

  async function getWalk() {
    return walkRepository.getWalk();
  }
  async function deleteWalk() {
    return walkRepository.deleteWalk();
  }

  return {
    addWalk,
    getWalk,
    deleteWalk,
  };
}

module.exports = { WalkService };
