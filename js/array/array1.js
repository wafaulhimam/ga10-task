// Part 1 - Intro
// Array is some way to store many variable, with index and element (value);

// let arr = [];

// Part 2 - Example
// let day = 'monday';
// let day = 'tuesday';
// let day = 'wednesday';
// console.log(day);
// etc
// --
// let day1 = 'monday';
// let day2 = 'tuesday';
// let day3 = 'wednesday';

// etc
// --
let days = ['monday', 'tuesday', 'wednesday'];

// Part 3 - Why we use array?
For example you have bunch of pen, where you place this pens ?
Pencil case or directly u put into your bag?

Reason why we using array:
1. Easier to handle data. 
2. Memory management (our program not store many variable).

// Part 4 - Array Characteristic
1. Inside array , they have key and value pair. 
2. Key have index with type integer/ number start with 0 .
3. Array have method inside . 
4. Element in array can store multiple data types .


// Part 5 - Example Create an Array
1. This way
let animals = ['bird', 'chicken', 'cow', 'panda'];

2. This way
let animals = [];
animals = ['bird', 'chicken', 'cow', 'panda'];

to show one element, example:
console.log(animal[3]);

check data types of array:
console.log(typeof(animal));

check length of an array:
console.log(animal.length);

can different data types:
const myFunc = function() {
    console.log('I Love JS');
};
let myArr = ['string', 3, false, null, undefined, [4, 5, 6,]; // you can call 4 5 6 is array inside array/ multidimensional array / nested array
console.log(myArr[5][1])
console.log(myArr[5[1]])

quiz:
how to show number 5 on console log based on myArr?
