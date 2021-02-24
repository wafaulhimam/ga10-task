// Part1 - Introduction (Pengantar)
// array --> kumpulan nilai (value), yang memiliki index.
// object --> kumpulan nilai (value), yang memiliki nama (name).

//  Definition from MDN:
// An object is a collection of properties, and a property is an association between a name (or key) and a value 
// (source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

// // Part 2 - Reason why we choose object
// let studentName = 'isyana';
// let studentAge  = 17;
// let isGraduated = true;
// let studentGPA = [3.5, 3.6, 3.7, 3.8, 4.0];

// function sumGpa(studentGPA) {
//     let total = 0;
//     for(let i = 0; i < studentGPA.length; i++) {
//         total += studentGPA[i];
//         // total = total + studentGPA[i];
//     }
//     return total/studentGPA.length;
// };

// So when we have another student (student2), how we make it?

// Aha, maybe we can use array like this:

// let student = ['isyana', 17, true, [3.5, 3.6, 3.7, 3.8, 4.0]];

// function sumGpa(studentGPA) {
//     let total = 0;
//     for(let i = 0; i < studentGPA.length; i++) {
//         total += studentGPA[i];
//         // total = total + studentGPA[i];
//     }
//     return total/studentGPA.length;
// };

// sumGpa(student[3]); // sum GPA of student, so we need to use array in index no. 3

// Still, JS dont know that isyana is name of student, 17 is age of student, etc. 

// THAT WHY, WE NEED Object, WE CAN ORGANIZE THIS DATA NEATLY.  

// Part 3 - Moving to Object
// let student = {
//     name: 'isyana',
//     isGraduated: true,
//     arrGpa: [3.5, 3.6, 3.7, 3.8, 4.0],
//     sumGpa: function() {
//         let total = 0;
//         let gpa = this.arrGpa;
//         for(let i = 0; i < gpa.length; i++) {
//             total += gpa[i];
//             // total = total + gpa[i];
//         }
//         return total/gpa.length;
//     }
// } 

// // how we call function inside object above?
// student.sumGpa();

// Part 4 - Object Anatomi
// let Man = {
//     name: 'afgan',
//     age: 20,
//     job: 'singer',
//     greeting: function() {
//         return `Hello my name is ${this.name}, now I'm ${this.age} years old, and I work as ${this.job}`
//     }
// }

// name, age, and job above are properties. 
// greeting above is method (function inside an object).

// Part 5 - Accessing Object
// 1. 1st way
// let student = {};
// student.name = 'jennie';
// student['age'] = 21;
// student.arrGpa = [3.20, 3.55, 4.00];


// 2. 2nd way
let student = {
    name: 'lisa',
    age: 30,
    arrGpa: [3.20, 3.55, 4.00],
    address: {
        work: 'Jl. Hang Lekiu No.KM 2, Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau',
        home: '182 Cecil St, #13-01 Frasers Tower, Singapore'
    }
};

Question: How to Access:
1. gpa 4.00
2. work