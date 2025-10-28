function selectionSortAsc(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        
        // Find minimum element in unsorted array
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        
        // Swap found minimum element with first element
        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

function selectionSortDesc(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let maxIndex = i;
        
        // Find maximum element in unsorted array
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[maxIndex]){
                maxIndex = j;
            }
        }
        
        // Swap found maximum element with first element
        if(maxIndex !== i){
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}
// set of array of unsorted data 
let num =[4,1,6,9,3,2,5];
console.log("Before Sort")
for(let n of num){
    console.log(n)
}
selectionSortAsc(num);
console.log("After Sort - Asc order")
for(let n of num){
    console.log(n)
}
selectionSortDesc(num);
console.log("After Sort - Desc order")
for(let n of num){
    console.log(n)
}