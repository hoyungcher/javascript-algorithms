function countUniqueValues(array) {
    let i = 0;
    let j = 1;
    let uniqueNumbers = 1;
    while ( j <= array.length - 1) {
        if (array[i] === array[j]) {
            j++;
        } else {
            uniqueNumbers++;
            i = j;
            j++;
        }
    }
    return uniqueNumbers;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));