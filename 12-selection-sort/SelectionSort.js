const selectionSort = array => {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }
    for (let i = 0; i < array.length; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallestIndex]) {
                smallestIndex = j;
            }
        }
        if ( i !== smallestIndex ) {
            swap(array, i, smallestIndex);
            console.log(array, i, smallestIndex);
        }
    }
}

selectionSort([12, 4, 36, 24, 102, 78]);