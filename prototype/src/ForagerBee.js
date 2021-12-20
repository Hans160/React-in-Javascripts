const Bee = require('./Bee');

class ForagerBee extends Bee {
  constructor() {
    super();

    this.age = 10;
    this.canFly = true;
    this.job = 'find pollen';
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}

module.exports = ForagerBee;
