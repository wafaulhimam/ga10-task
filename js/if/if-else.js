// let angka = Number(prompt('Masukin angka terserah kamu: '));

// if (angka === 2) {
//     console.log('benar ini angka 2');
// } else if (angka === 3) {
//     console.log('benar ini angka 3');
// } else {
//     console.log('Kamu ga masukin angka');
// };

// Latihan 1
// 1. Temen buat file tugas.js
// 2. Buat pendeteksi ganjil Genap 
// 3. kalo angka genap --> 'kamu memasukkan angka genap'
// 4. Kalo angka ganjil --> 'kamu memasukkan angka ganji'.


// Ternary operator example
// function getDiscount(isMember) {
//     return (isMember ? 'Rp100.000' : 'Rp5.000');
// };

// `Tes ${iniVarible}`

// console.log('adalah member:', getDiscount(true));
// console.log('bukan member:', getDiscount(false));

let angka = Number(prompt('masukkan angka, \n contoh: 1,2,3, dst'));

switch(angka) {
    case 1:
        alert('Ini angka satu');
        break;
    case 2:
        alert('Ini angka dua');
        break;
    default:
        alert('Ini bukan angka');
}

// Latihan Switch Case
0. Buat tugas2.js.
1. Buat list menu makanan/ minuman, misal (sayur, buah, susu, nasi, softdrink, burger, pizza);
2. Tampilkan alert sesuai healthy/ unhealthy makanan/ minuman tsb.
3. Softdrink --> makanan ini tidak sehat 
4. Buah --> makanan ini sehat.