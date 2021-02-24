1. Encapsulation - berhubungan dengan menyembunyikan variabel/ properties data
class Car {
    setAttr(model, year){ //setter
        this.model = model;
        this.year = year;
    }

    getModel() { // getter
        console.log(this.model);
    }
    getYear() { // getter
        console.log(this.year);
    }
}

const C = new Car();
C.setAttr('Ford', 2020); // setter
C.getModel(); // getter
C.getYear(); // getter

2. Abstraction - berhubungan dengan menyembunyikan method
function Person(name, age) {
    this.name = name;
    this.age = age;
    const address = 'address';
    const findAddress = function(){
        console.log(`${address} is a private`)
    }
    this.getAddress = function(){
        console.log(name, age);
        findAddress();
    }
}

const P = new Person('Afgan', 45);
P.findAddress(); // error
P.getAddress(); // address is private

3. Inheritance
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    drive() {
        console.log(`the vehicle is ${this.speed}`)
    }
}

class MotorCycle extends Car {

}

let moto = new MotorCycle('fast');
moto.drive(); // the vehicle is fast!

// 4. Polymorphism
class Car { // Parent - Ortu
    drive() {
        console.log('slow');
    }
}

class MotorCycle extends Car { // Child - Anak
    drive() {
        console.log('fast');
    }
}

const car = new Car(); // instance dari Car
const moto = new MotorCycle(); // instance dari mtorocycle
car.drive() // slow
moto.drive() // fast

overriding
overload 

class Car { // Parent - Ortu
    drive(jarak, tujuan) {
        console.log('slow');
    }
    drive(tujuan, jarak) {
        console.log('slow');
    }
    drive(arr, jarak) {
        console.log('slow');
    }
}

const car = new Car(); // instance dari Car
car.drive(10, 'jekardah');
car.drive('bandung', 100);
car.drive([], 100);

they can access specific method, by sending specific argument.

Source: 
https://medium.com/@khmel87/javascript-four-principles-of-object-oriented-programming-cd81a04262cb
https://youtube.com/watch?v=SiBw7os-_zI