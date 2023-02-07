let sort = array => {
    const array2 = [];
    let pos = 0, max = array[0], min = array[0];
    for (let j = 0; j < array.length; j++) {
        if (max < array[j]) {
            max = array[j];
        }
    }

    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
            if (array[k] !== null) {
                if (min > array[k]) {
                    min = array[k];
                    pos = k;
                }
            }

        }
        array2[i] = min;
        array[pos] = null;
        min = max;
    }
    return array2;
}

let arr = [1, -5, -3, 2, 4]
console.log(sort(arr));