function insertionSortAsc(arr){
    for(let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function insertionSortDesc(arr){
        for(let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1] that are smaller than key
        // to one position ahead of their current position
        while(j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
// set of array of unsorted data 
let num =[4,1,6,9,3,2,5];
console.log("Before Sort")
for(let n of num){
    console.log(n)
}
insertionSortAsc(num);
console.log("After Sort - Asc order")
for(let n of num){
    console.log(n)
}
insertionSortDesc(num);
console.log("After Sort - Desc order")
for(let n of num){
    console.log(n)
}