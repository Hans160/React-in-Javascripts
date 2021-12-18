const Grub = require('./Grub');

class Bee extends Grub {
  constructor() {
    super();

    this.age = 5;
    this.job = 'Keep on growing';
    this.color = 'yellow';
  }
}

module.exports = Bee;
