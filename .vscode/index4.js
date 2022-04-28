/* const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return `attack with ${this.weapon}`;
    }
}
const elf2 = {
    name: 'Sally',
    weapon: 'Thor',
    attack() {
        return `attack with ${this.weapon}`;
    }
}

console.log(elf.name);
console.log(elf2.name);

console.log(elf.attack());
console.log(elf2.attack()); */

/* function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return `attack with ${this.weapon}`;
        }
    }
}

const peter = createElf('Peter', 'stones');

console.log(peter.name);
console.log(peter.attack());

const sam = createElf('Sam', 'fire');

console.log(sam.name);
console.log(sam.attack());
 */

const Character = {
    attack() {
        return `attack with ${this.weapon}`;
    }
}

function createElf(name, weapon) {
    newElf = Object.create(elfFunctions);
    return {
        name,
        weapon,
    }
}


const peter = createElf('Peter', 'stones');
//peter.attack = elfFunctions.attack;
console.log(peter.attack());

const sam = createElf('Sam', 'fire');
//sam.attack = elfFunctions.attack;
console.log(sam.attack());