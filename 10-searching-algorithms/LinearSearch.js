function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }

    }
    return -1;
}

console.log(linearSearch([0,1,4,17,28], 17));
console.log(linearSearch([0,1,4,17,28], 27));