// code creates the merge function to be used in mergeSort
// merges two sorted arrays

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

console.log(merge([1,3,6,8,12,15], [2,4,7,11,19]));