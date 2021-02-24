class Manusia {
    static isHidupDiBumi = true; // this static property
    static kelompok = 'vertebrata';

    // property
    constructor(name, isAlive) {
        this.nama = name; // this will created property called nama gengs
        this.isHidup = isAlive; // yang ini property isHidup wokey
    }

    // Method
    introduce() {
        console.log(`Halo, namaku adalah ${this.nama} dan Aku ${this.isHidup ? "Hidup" : "Meninggal"}`)
    }

    static isMakan(makanan) {
        let foods = ["tanaman", "hewan"];
        return foods.includes(makanan.toLowerCase());
    }

    
}

// Check Static Properties and Static Method
console.log(Manusia.kelompok); // vertebrata
console.log(Manusia.isHidupDiBumi); // true
console.log('Wafa'); // Wafa

console.log('human eating tanaman:', Manusia.isMakan('TANAMAN'));
console.log('human is eating manusia:', Manusia.isMakan("hUmAn"));

// Instance 1
let Aubameyang = new Manusia('Aubameyang', true);
console.log('Aubameyang klmpk:', Aubameyang.kelompok); // undefined
console.log('Aubameyang ishidup di bumi:', Aubameyang.isHidupDiBumi); // undefined
console.log('Aubameyang nama:', Aubameyang.nama); // Aubameyang

Aubameyang.introduce();

console.log('Aubameyang is eating manusia:', Aubameyang.isMakan("hUmAn"));

Aubameyang.greet('Kim Jennie');

Manusia.destroy('Hutan Kalimantan');

// Instance 2
let Nike = new Manusia('Nike Ardilla', false);
Nike.introduce();
