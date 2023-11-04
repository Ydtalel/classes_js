const Bowman = require('../../bowman');

describe('Bowman class', () => {
  it('should create a bowman character with valid name', () => {
    const bowman = new Bowman('Alice');
    expect(bowman.name).toBe('Alice');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});
