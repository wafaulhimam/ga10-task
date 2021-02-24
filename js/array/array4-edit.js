// Array Assignment
let arrPenumpang = ['wafa', 'raisa', null, 'setia'];
// let namaPenumpang = '';
// function addPassenger(namaPenumpang, arrPenumpang) {
    // function tambahPenumpang(namaPenumpang, arrPenumpang) {
    function tambahPenumpang(namaPenumpang) {
        console.log('hai :', arrPenumpang);
        console.log('typeof :', typeof arrPenumpang);
        // jika bus kosong
        if (arrPenumpang.length === 0) {
            arrPenumpang.push(namaPenumpang);
            return arrPenumpang;
        } else {
            for(let i = 0; i < arrPenumpang.length; i++ ) {
                if (arrPenumpang[i] === null) {
                    arrPenumpang[i] = namaPenumpang;
                    return arrPenumpang;
                } else if (arrPenumpang[i] == namaPenumpang) {
                    console.log(`${namaPenumpang} sudah ada di dalam bus`);
                    return arrPenumpang;
                } else if (i === arrPenumpang.length - 1) {
                    arrPenumpang.push(namaPenumpang);
                    return arrPenumpang;
                }
            };
        }
    }
// }