/* let dog ={
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){
        return `This dog has ${this.numLegs} legs.`;
    }

}

console.log(dog.name, dog.numLegs);
console.log(dog.sayLegs()); */
/* 
class Dog {
    constructor() {
        this.name = name;
        this.color = color;
        this.numLegs = numLegs;
    }
}
function Dog() {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
} */
/* 
class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }
}
// Only change code below this line
const terrier = new Dog('Toto', 'brown');

console.log(terrier.name);
console.log( terrier instanceof Dog);

class House {
    constructor(numBedrooms) {
        this.numBedrooms = numBedrooms;
    }
}

const myHouse = new House(8);
console.log(myHouse.numBedrooms);
console.log(myHouse instanceof House);
 */

/* class Bird {
    constructor(name) {
        this.name = name;
        this.numLegs = 2;
    }
}

let canary = new Bird("Tweety");
let ownProps = [];

for (const props in canary) {
    if(canary.hasOwnProperty(props)){
        ownProps.push(props);
    }
}

console.log(ownProps); */