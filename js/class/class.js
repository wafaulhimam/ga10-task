class Bus {
    // static get kapasitasMaxGan() {
    //     return 2;
    // };
    constructor(sopir, penumpang, trayek, kas) {
        this.sopir = sopir;
        this.penumpang = penumpang;
        this.trayek = trayek;
        this.kas = kas;
        this.kapasitasMax = 3;
    }
    
    getKapasitasMax(){
        return this.kapasitasMax;
        // return kapasitasMaxGan;
    }

    penumpangNaik(namaPenumpang) {
        const maxCapacity = 1;
        // if(this.penumpang.length === maxCapacity) {
            // if(this.penumpang.length === this.kapasitasMax) {
            if(this.penumpang.length === this.getKapasitasMax()) {
            // console.log(`Bus Penuh sudah terisi ${maxCapacity} penumpang, ga bisa naik lagi`);
            // console.log(`Bus Penuh sudah terisi ${this.kapasitasMax} penumpang, ga bisa naik lagi`);
            console.log(`Bus Penuh sudah terisi ${this.getKapasitasMax()} penumpang, ga bisa naik lagi`);
            return false;
        } else {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }
    }

    penumpangTurun(namaPenumpang, bayar) {
        console.log('bayar gan:', bayar);
        if (namaPenumpang === undefined) {
            console.log('heyy masukin nama penumpang yg diturunin!')
        } else if(bayar === undefined) {
            console.log('Hey bayar dulu sebelum turun!');
        } else {
            if(this.penumpang.length === 0) {
                console.log('Bus masih kosong, penumpang blm naik!');
                return false;
            }
    
            if(this.penumpang.includes(namaPenumpang)) {
                const iNamaPenumpang = this.penumpang.indexOf(namaPenumpang);
                this.penumpang.splice(iNamaPenumpang, 1);
    
                // if (isNaN(this.kas)) {
                //     this.kas = 0;
                // } else {
                //     this.kas += bayar;
                // }
                this.kas += bayar;
                return this.penumpang;
            }
        }

        // for(let i = 0; i < this.penumpang.length; i++) {
        //     if(this.penumpang[i] === namaPenumpang) {
        //         // this.penumpang[i] = null;
        //         // this.penumpang.splice(i, 1, null);
        //         // this.penumpang.splice(i, 1);
        //         this.kas += bayar;
        //         return this.penumpang;
        //     }
        // }
    }
}

let bus1 = new Bus('Afgan', ['wafa', 'dela'], ['Jakarta', 'Banten'], 0);
let bus2 = new Bus('Isyana',[], ['Aceh', 'Medan'], 0);