
// function Person (nama, alamat, udhNikah) {
//    this.name = nama;
//    this.address = alamat;
//    this.isMarried = udhNikah;
// }

// let isyana = new Person('Isyana', 'Jakarta', true);

// Class
class Person {
    static group = 'mamalia';

    constructor (nama, alamat, udhNikah) {
        this.name = nama;
        this.address = alamat;
        this.isMarried = udhNikah;
    }
    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.isMarried}`)
    }

    static isEating(food) {
        let foods = ['PLANT', 'ANIMAL'];
        return foods.includes(food.toUpperCase());
    }
}

class BidakCatur {
    constructor (name) {
        this.name = name;
    }
    move() {

    }
}

class Benteng extends BidakCatur {
    constructor() {
        super(name)
    }
}

class Kuda extends BidakCatur {
    constructor() {
        super(name)
    }
}

// Static method
console.log(Person.isEating('plAnT'));
console.log(Person.isEating('HumAN'));

// Instance 1 (Cetakan Pertama)
let raisa = new Person('raisa', 'bandung', false);
console.log('raisa', raisa);
console.log('raisa group', raisa.group);
console.log('raisa kenalan', raisa.introduce());


// Static property from Class
console.log(Person.group);

let studennt = {}

let student1 = {}

let student2 = {}















// const createObj = (nama, alamat) => {

// }

// function createObj(nama, alamat) => {

// }