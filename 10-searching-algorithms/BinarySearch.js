function binarySearch(array, value){
    let i = 0;
    let j = array.length - 1
    let pointer = Math.floor((i + j) / 2)
    while (array[pointer] !== value && i <= j) {
        console.log(i, pointer, j)
        if (array[pointer] >= value) {
            j = pointer - 1;
        } else {
            i = pointer + 1;
        }
        pointer = Math.floor((i + j) / 2);
    }
    if (array[pointer] === value) {
        return pointer;
    } else {
        return -1;
    }
  }

console.log(binarySearch([0,1,4,17,28], 0));
console.log(binarySearch([0,1,4,17,28], 1));
console.log(binarySearch([0,1,4,17,28], 4));
console.log(binarySearch([0,1,4,17,28], 17));
console.log(binarySearch([0,1,4,17,28], 29));