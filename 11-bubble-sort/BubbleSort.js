const bubbleSort = array => {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(array, array[j], array[j + 1]);
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array
}

bubbleSort([34, 12, 45, 9, 17, 25]);