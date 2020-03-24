// Sum All Numbers in a Range
function sumAll(arr) {
    let sum = 0;

    for (let x = Math.min(...arr); x <= Math.max(...arr); x++) {
        sum += x;
    }

    return sum;
}

// Diff Two ArraysPassed - #1
function diffArray(arr1, arr2) {
    let a1 = arr1.filter(x => !arr2.includes(x));
    let a2 = arr2.filter(x => !arr1.includes(x));
    return a1.concat(a2);
}

// Diff Two ArraysPassed - 2
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(x => !arr1.includes(x) || !arr2.includes(x));
}
