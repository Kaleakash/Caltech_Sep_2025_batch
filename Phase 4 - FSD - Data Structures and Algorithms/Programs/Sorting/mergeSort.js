// Merge Sort Ascending Order
function mergeSortAsc(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    console.log("Mid value "+mid)
    const left = arr.slice(0, mid);
    console.log("left "+left)
    const right = arr.slice(mid);
    console.log("right "+right)
    return mergeAsc(mergeSortAsc(left), mergeSortAsc(right));
}

function mergeAsc(left, right) {
    let result = [];        // empty array 
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            console.log("left index result "+result);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            console.log("right index result "+result);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Merge Sort Descending Order
function mergeSortDesc(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return mergeDesc(mergeSortDesc(left), mergeSortDesc(right));
}

function mergeDesc(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Test the implementation
let arr = [2,1,3,4];
console.log("Original array:", arr);

let sortedAsc = mergeSortAsc([...arr]);
console.log("Ascending order:", sortedAsc);

let sortedDesc = mergeSortDesc([...arr]);
console.log("Descending order:", sortedDesc);