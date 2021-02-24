Part 6 - How to Make an Object
There are so many ways:
1. Object Literal
let student = {
    name: 'anneth',
    age: 21,
    email: 'anneth@meicrosoft.com',
    isGraduated: true
}

So how to make 2nd object? Let's say student2? 
We need to copy that object above and re-assign some value of properties, eg:

let student1 = {
    name: 'anneth',
    age: 21,
    email: 'anneth@meicrosoft.com',
    isGraduated: true
}

let student2 = {
    name: 'ferguson',
    age: 70,
    email: 'ferguson@mu.com',
    isGraduated: false
}
let student3 = {
    name: 'ferguson',
    age: 70,
    email: 'ferguson@mu.com',
    isGraduated: false
}
let student4 = {
    name: 'ferguson',
    age: 70,
    email: 'ferguson@mu.com',
    isGraduated: false
}

2. Function Declaration 
function createStudentObj(name, age, email, isGraduated) {

    let student = {};
    student.nama = name;
    student.umur = age;
    student.surel = email;
    student.adalahLulus = isGraduated;
    return student;
}

// Blueprint (template)
const createStudentObj = (name, age, email, isGraduated, hobby) => {
  let student = {};
  student.nama = name;
  student.umur = age;
  student.surel = email;
  student.adalahLulus = isGraduated; // imperative
  return student;

  let student = { // es5
    nama: name,
    umur: age,
    surel: email,
    adalahLulus: isGraduated
  };
  return student;

  let student = { // es6
    name,
    age,
    email,
    isGraduated,
    hobby,
  }
  return student;
}

// Instance (cetakan atau obbjek)

// Instance 1
let Student1 = createStudentObj(['lisa', 'lele'], 10, 'lisa@BarProp.com', true, ['makan', 'tidur', 'gitu lagi']);

// Instance 2
let Student2 = createStudentObj('tatia', 20, 'tatia@BarProp.com', true, ['ngoding', 'ga tidur', 'gitu terus sampe jago']);


// Function hanlde tambah penumpang
const penumpangNaik = (namaPenumpang, arrNamaPenumpang) => {
  // if(bus kosong) {
  //   naikin penumpang ;
  //   tambah hobi ;
  // } else if (bus penuh) {
  //   penuh!!!!!!!!!!!!!!!!!!! ;
  // }

  if(arrNamaPenumpang.length === 0) {
    arrNamaPenumpang.push(namaPenumpang) ;
  } else if (bus penuh) {
    penuh!!!!!!!!!!!!!!!!!!! ;
  }
};

penumpangNaik('Dio', Student1.name);

Bus1.penumpangNaik()

// Function handle nurunin penumpang



// // procedural programming

// let student3 = createStudentObj('ronaldo', 33, 'ronaldo@juventus.com', false);

// let student4 = createStudentObj('messi', 35, 'messi@barcelona.com', true);

// 3. Constructor Function (keyword new)
function Student(name, age, email, isGraduated) {
    // let this = {};
    this.name = name;
    this.age = age;
    this.email = email;
    this.isGraduated = isGraduated;
    // return this;
}

oop programming

let student5 = new Student('aubameyang', 31, 'aubameyang@arsenal.com', true);

let student6 = new Student('buffon', 40, 'buffon@juventus.com', true);

// 4. Object.create(), 5. Object assign, 6. Class Es6
// See more: https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/ 

// 4. Object Create
const Man = {
    gender: 'man',
}

const student = Object.create(Man, { name: { value: 'Lisa' }})


console.log('Man:', Man);
console.log('student:', student.name);

// 5. Object Assign
const orgObject = { company: 'Facebook', place: 'Pacific Place' };
const kendaraan = { carName: 'Alphard', motor: 'Supra' };

const karyawan = Object.assign({}, orgObject, kendaraan);
console.log('karyawan :', karyawan);

// 6. Using E6 Class
class Person {
    constructor(fname, lname) {
      this.firstName = fname;
      this.lastName = lname;
    }
}
  
  const person = new Person('testFirstName', 'testLastName');

  const orang2 = new Person('Ardiansyah', 'Putra');
  
  console.log(person.firstName); // testFirstName
  console.log(person.lastName); // testLastName
  console.log('person :tulis apa aja ah', person);
  console.log('orang2 :ga boleh tulis macem2', orang2);

  syntactic sugar.

