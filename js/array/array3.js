// 3. Showing element inside the array - quiz
// let names = ['jennie', 'rose', 'lisa', 'jisoo', 'raisa'];

// // for(let i = 0; i < 4; i++) {
// for(let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     console.log(`Student GA Fe Batch 10 - No ${i+1}: ${names[i]}`)
// };

// Part 7 - Array  Method
// 1. length 
// let names = ['jennie', 'rose', 'lisa', 'jisoo'];
// console.log(names.length);

// 2. join
// let names = ['jennie', 'rose', 'lisa', 'jisoo'];
// console.log(names.join(' - '));

// 3. push (tambah di akhir) --> stacks (FILO)
// let names = ['jennie', 'rose', 'lisa', 'jisoo'];
// names.push('kekeyi', 'anneth', 'afgan', 'dio', null, undefined);
// console.log(names);

// 4. pop (hapus di akhir) --> stacks (FILO)
// let names = ['jennie', 'rose', 'lisa', 'jisoo'];
// names.pop();
// names.pop();
// names.pop();
// names.pop();
// console.log(names);

// 5. unshift (tambah di awal) --> queue (FIFO)
// let names = ['jennie', 'rose', 'lisa', 'jisoo'];
// names.unshift('raisa', 'afgan', 'tatia');
// console.log(names);

// 6. shift (menghilangkan/ menghapus di awal) --> queue (FIFO)
// let names = ['jennie', 'rose', 'lisa', 'jisoo'];
// names.shift('jennie', 'rose');
// names.shift('jennie', 'rose');
// names.shift('jennie', 'rose');
// console.log(names);

// lodash, underscore, ramda, immutablejs

// 7. slice - diiris (menghasilkan array baru) --> linked list
let names = ['jennie', 'rose', 'lisa', 'jisoo'];
// names2 = names.slice(awal, akhir)
names2 = names.slice(1, 3);
console.log(names2);

// 8. splice - ditambal --> linked list
// names.splice(indexAwal, maudihapusberapa, elemenBaru1, elemenBaru2);
// names.splice(1, 2, 'ethan', 'ardiansyah');
// console.log(names);

// 9. forEach 
// 10. map
// 11. filter
// 12. find