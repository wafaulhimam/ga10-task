// Array Assignment
// let arrPenumpang = ["ardiansyah", null, "ethan", "wafa"];
let arrPenumpang = ['jennie', 'rose', null, 'wafa', null];
const tambahPenumpang = function(namaPenumpang, arrPenumpang) {
	// jika bus kosong
	if (arrPenumpang.length === 0) {
		arrPenumpang.push(namaPenumpang);
		return arrPenumpang;
	} else {
		for(let i = 0; i < arrPenumpang.length; i++ ) {
            if (arrPenumpang[i] == namaPenumpang) {
                console.log(`${namaPenumpang} sudah ada di dalam bus`);
                return arrPenumpang;
            } else if (arrPenumpang[i] === null) {
                // arrPenumpang[i] = namaPenumpang;
                // arrPenumpang.unshift()
                // return arrPenumpang;
                arrPenumpang.splice(i, 1, namaPenumpang);
                return arrPenumpang;
            } else if (i === arrPenumpang.length - 1) {
                arrPenumpang.push(namaPenumpang);
                return arrPenumpang;
            }
		};
	}
}

const hapusPenumpang = function(namaPenumpang) {
    // for(let i = 0; i < arrPenumpang.length; i++) {
    //     if(namaPenumpang === arrPenumpang[i] && arrPenumpang.includes(arrPenumpang[i]) === namaPenumpang;) {
            
    //     }
    // }

    for(let i = 0; i < arrPenumpang.length; i++) {
        if (arrPenumpang.includes(namaPenumpang) ) {
            arrPenumpang.splice(i, 1, namaPenumpang);
            return arrPenumpang;
        }
    }

}