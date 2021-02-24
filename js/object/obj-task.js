// Pengelolaan Bus
// - Sopir 
// - Trayek 
// - Kas, ketika bus sudah terisi penumpang, dan ada yg mau turun, maka kas bertambah
// - Penumpang
//     - naik
//     - turun

// ** Contoh Bus ini:
// sopir: Afgan
// penumpang: kosong
// trayek: Jakarta-Banten
// kas: Rp 0,00

// Start the code
function Bus(sopir, penumpang, trayek, kas) {
    this.sopir = sopir;
    this.penumpang = penumpang,
    this.trayek = trayek;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang; 
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            alert('Bus masih kosong!');
            return false;
        }

        for(let i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] === namaPenumpang) {
                this.penumpang[i] = null;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

let bus1 = new Bus('Afgan', [], ['Jakarta', 'Banten'], 0);
let bus2 = new Bus('Isyana',[], ['Aceh', 'Medan'], 0);
