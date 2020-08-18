const merge = (array1, array2) => {
    let results = [];
    let i = 0;
    let j = 0;
    while ( i < array1.length && j < array2.length) {
        if (array2[j] > array1[i]) {
            results.push(array1[i]);
            i++;
        } else {
            results.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        results.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        results.push(array2[j]);
        j++;
    }
    return results;
}


const mergeSort = array => {
    if (array.length <= 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));
    return merge(left, right);
}

console.log(mergeSort([13,2,34,45,102,78,46,23,10]));