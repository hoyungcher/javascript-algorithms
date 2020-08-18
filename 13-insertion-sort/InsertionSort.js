const insertionSort = array => {
    for (var i = 1; i < array.length; i++) {
        let currentValue = array[i];
        for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
            array[j + 1] =  array[j];
        }
        array[j + 1] = currentValue;
    }
    return array;
}

console.log(insertionSort([2, 1, 9, 76, 4, 0]));