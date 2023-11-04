const Character = require('./Character');

class Daemon extends Character {
  constructor(name) {
    super(name, 'BDaemon');
    this.attack = 25;
    this.defence = 25;
  }
}

module.exports = Daemon;
