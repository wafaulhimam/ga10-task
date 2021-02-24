// expected input
const arr = ['a', 'b', 'b', 'c', 'd', 'e'];


// expected output
// const newArr = ['a', 'b', 'c', 'd', 'e'];

function myReduce(array) {
    if(Array.isArray(array)) {
        for(let i = 0; i < array.length; i++) {
            const sameVal = (element) => element === array[i];
            if(array.some(sameVal)) {
                console.log('tes');
                const idxDeletedVal = array.indexOf(array[i])
                const newArr = array.splice(idxDeletedVal, 1)
                return newArr;
;            }
        }
    }
}

console.log('reduce arr =>', myReduce(arr));

// ```javacript

// codenya

// ```

// 1. FizzBuzz
// 2. for loop nested
// 3. if nested
// 4. https://github.com/sudheerj/javascript-interview-questions

