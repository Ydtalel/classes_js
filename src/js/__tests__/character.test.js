const Character = require('../../Character');
const Bowman = require('../../bowman');

describe('Character class', () => {
  it('should create a character with valid name and type', () => {
    const character = new Character('John', 'Bowman');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Bowman');
  });

  it('should throw an error if the name is too short', () => {
    expect(() => new Character('J', 'Bowman')).toThrowError('Name should be between 2 and 10 characters');
  });

  it('should throw an error if the type is invalid', () => {
    expect(() => new Character('John', 'InvalidType')).toThrowError('Invalid character type');
  });

  it('should level up a character', () => {
    const character = new Bowman('John', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  it('should not level up a dead character', () => {
    const character = new Character('John', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrowError('Cannot level up a dead character');
  });

  it('should take damage and reduce health', () => {
    const character = new Character('John', 'Bowman');
    character.damage(20);
    expect(character.health).toBe(80);
  });

  it('should not allow health to go below 0', () => {
    const character = new Character('John', 'Bowman');
    character.damage(200);
    expect(character.health).toBe(0);
  });
});

