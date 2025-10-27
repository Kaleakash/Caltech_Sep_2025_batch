// function to bubble sort 
function bubbleSortAsc(arr){
    let len = arr.length;
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<len-1;i++){
            if(arr[i]>arr[i+1]){
                // swap element from arr[i] and arr[i+1];
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }

    }while(swapped);
}
function bubbleSortDesc(arr){
    let len = arr.length;
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<len-1;i++){
            if(arr[i]<arr[i+1]){
                // swap element from arr[i] and arr[i+1];
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }

    }while(swapped);
}

// set of array of unsorted data 
let num =[4,1,6,9,3,2,5];
console.log("Before Sort")
for(let n of num){
    console.log(n)
}
bubbleSortAsc(num);
console.log("After Sort - Asc order")
for(let n of num){
    console.log(n)
}
bubbleSortDesc(num);
console.log("After Sort - Desc order")
for(let n of num){
    console.log(n)
}
