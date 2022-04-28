/** @format */

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    console.log("this", this);
  }
  attack() {
    return `attack with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(name, weapon, spell) {
    super(name, weapon);
    this.spell = spell;
  }
  cast() {
    return `cast ${this.spell}`;
  }
}

const toto = new Character("Toto", "sword");
console.log(toto.attack());

const titi = new Elf("Titi", "fire", "fireball");

console.log(titi.cast());
console.log(titi.attack());


class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeForth() {
      return 'strongest fort in the world made'
  }
}

const shrek = new Ogre("Shrek", "club", "green");
console.log(shrek.makeForth());
console.log(shrek.attack());
console.log(shrek);
