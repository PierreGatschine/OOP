/** @format */

// Constructor functions
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        console.log('this',this);
    }
    attack() {
        return `attack with ${this.weapon}`;
    }
} 



const toto = new Character('Toto', 'sword');
console.log(toto.attack());



/* const peter = new Elf('Peter', 'stones');
console.log(peter instanceof Elf);
const sam = new Elf('Sam', 'fire');
console.log(peter);
console.log(peter.attack());
console.log(sam);
console.log(sam.name);

const fiona = new Elf('Fiona', 'ninja stars');
console.log(fiona.attack());

const ogre = { ...fiona}
console.log(ogre);
console.log(ogre.__proto__);

 */







/* //explicit binding
const person = {
    name: 'John',
    age: 50,
    hi: function() {
        console.log('hi ' + this.setTimeout);
    }.bind(window)
}

person.hi();

const person2 = {
  name: "Karen",
  age: 50,
  hi: function () {
      var inner = () => {
          console.log("hi " + this.name);
      }
      return inner();
  }
};

console.log(person2.hi());
 */