const Swordsman = require('../../swordsman');

describe('Swordsman class', () => {
  it('should create a swordsman character with valid name', () => {
    const swordsman = new Swordsman('Bob');
    expect(swordsman.name).toBe('Bob');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});
