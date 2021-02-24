// Part 8 - The answer of part 7
let jmlPesawat = 10;
let pesawatBeroperasi = 6;

for(let noPesawat = 1;; noPesawat <= jmlPesawat; noPesawat++) {
    if(noPesawat <= pesawatBeroperasi) {
        console.log(`Pesawat No. ${noPesawat} sedang beroperasi dengan baik.`);
    } else if (noPesawat === 8) {
        console.log(`Pesawat No. ${noPesawat} sedang lembur kejar setoran.`);
    } else {
        console.log(`Pesawat No. ${noPesawat} sedang tidak beroperasi`);
    };
};

// Part 9 - Tugas, pesawat no8 dan no10 lembur

// Part10 - the answer of part9
let jmlPesawat = 10;
let pesawatBeroperasi = 6;

for(let noPesawat = 1;; noPesawat <= jmlPesawat; noPesawat++) {
    if(noPesawat <= pesawatBeroperasi) {
        console.log(`Pesawat No. ${noPesawat} sedang beroperasi dengan baik.`);
    } else if (noPesawat === 8 || noPesawat === 10) {
        console.log(`Pesawat No. ${noPesawat} sedang lembur kejar setoran.`);
    } else {
        console.log(`Pesawat No. ${noPesawat} sedang tidak beroperasi`);
    };
};

// Part 11 - Tugas, pesawat no.5, no.8, dan no10 lembur

// Part 12 - The answer of part 11
let jmlPesawat = 10;
let pesawatBeroperasi = 6;

for(let noPesawat = 1;; noPesawat <= jmlPesawat; noPesawat++) {
    if(noPesawat <= pesawatBeroperasi && noPesawat !== 5) {
        console.log(`Pesawat No. ${noPesawat} sedang beroperasi dengan baik.`);
    } else if (noPesawat === 8 || noPesawat === 10 || noPesawat === 5) {
        console.log(`Pesawat No. ${noPesawat} sedang lembur kejar setoran.`);
    } else {
        console.log(`Pesawat No. ${noPesawat} sedang tidak beroperasi`);
    };
};