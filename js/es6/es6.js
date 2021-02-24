// Create Blueprint using expression function (arrow)
const createBusObj = (sopir, penumpang, trayek, kas, totalKas) => {
    // console.log('hai');

    // Way 1
    // let Bus = {};
    // Bus.driver = sopir;
    // Bus.passenger = penumpang;
    // Bus.route = trayek;
    // Bus.cash = kas;

    // Way 2
    // let Bus = {
    //     driver: sopir,
    //     passenger: penumpang,
    //     route: trayek,
    //     cash: kas,
    //     roda: 'bulat'
    // };

    // Way 3 - Object Property Shorthand ES6
    let Bus = {
        sopir,
        penumpang,
        trayek,
        kas,
        totalKas,
        // roda: 'bulat'
        // addPassenger: 
    };
    return Bus;
};


// Create Instance
// Instance 1
let Bus1 = createBusObj('afgan', ['lisa', 'lele'], ['batam', 'singapura'], [], 0);

// Instance 2
const Bus2 = createBusObj('jennie', [], ['malaysia', 'thailand'], [], 0);

const BusLangit = createBusObj('angelwati', [], ['earth', 'heaven'], [], 0);

// Helper reducer, sum integer (number) inside array
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// Create function for handle addPassenger
const addPassenger = (passengerName, arrPassenger, pay, arrCash, sourceObj) => {
    const maxPassCapacity = 10;
    if(arrPassenger.length === maxPassCapacity) {
        console.log(`Bus sudah terisi ${maxPassCapacity} penumpang, ga cukup nambah lagi!`);
        return arrPassenger;
    } else {
        arrPassenger.push(passengerName);
        arrCash.push(pay);

        console.log('sourceObj beofre =>', sourceObj);
        const newObj = {
            // sopir: 'sukadi',
            totalKas: arrCash.reduce(reducer),
            // trayek: 'sontoloyo'
        }
        sourceObj = Object.assign(sourceObj, newObj);

        console.log('sourceObj after =>', sourceObj);

        return arrPassenger;
    }
}

// create func for handle remove passenger
const removePassenger = (passengerName, arrPassenger) => {
    if(arrPassenger.length === 0) {
        console.log('Bus masih kosong, penumpang naik!');
        return false;
    } else if(arrPassenger.includes(passengerName)) {
        const iPassName = arrPassenger.indexOf(passengerName);
        arrPassenger.splice(iPassName, 1);
        return arrPassenger;
    }
}

// Try function
addPassenger('garong', Bus1.penumpang, 2000, Bus1.kas, Bus1);
addPassenger('jisoo', Bus1.penumpang, 4000, Bus1.kas, Bus1);
addPassenger('cendol', Bus1.penumpang, 6000, Bus1.kas, Bus1);

addPassenger('garong', BusLangit.penumpang, 1000, BusLangit.kas, BusLangit);
addPassenger('jisoo', BusLangit.penumpang, 2000, BusLangit.kas, BusLangit);
addPassenger('cendol', BusLangit.penumpang, 3000, BusLangit.kas, BusLangit);
// removePassenger('lisa', Bus1.penumpang, 1000, Bus1.kas);
// removePassenger('lele', Bus1.penumpang, 1000, Bus1.kas);
console.log('kas bus1 =>', Bus1.kas);
console.log('totalKas bus1 =>', Bus1.totalKas);
console.log('kas bus1 =>', Bus1.kas);
console.log('trayek bus1 =>', Bus1.trayek);
console.log('nama supir bus1 =>', Bus1.sopir);
console.log('Bus1 =>', Bus1);
console.log('BusLangit =>', BusLangit);
console.log('BusLangit total kas =>', BusLangit.totalKas);



