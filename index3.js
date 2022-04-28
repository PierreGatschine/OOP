/** @format */
/* 
const elfFunctions = {
  attack() {
    return `attack with ${this.weapon}`;
  },
};

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  console.log(newElf.__proto__);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf("Peter", "stones");
//peter.attack = elfFunctions.attack;
console.log(peter.attack());

const sam = createElf("Sam", "fire");
//sam.attack = elfFunctions.attack;
console.log(sam.attack());
 */

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

const toto = new User('Toto');
console.log(toto.sayHi());
console.log(toto.__proto__);
console.log(typeof toto);
console.log(typeof User);


function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}

let User = makeClass('Hello');

new User().sayHi();

console.log(User());
