
function binarySearch(arr,target){
    let left =0;
    let right = arr.length-1;
    
    while(left<=right){

        let midIndex = Math.floor((left+right)/2);
        console.log("midIndex "+midIndex)
        if(arr[midIndex]==target){
            return midIndex;
        }

        if(arr[midIndex]<target){
            left = midIndex+1;
        }else {
            right = midIndex-1;
        }       
    }
     // target not found 
    return -1;

}

let num = [4,6,9,1,2,5,7,3];
let target =7;
console.log("UnSorted array "+num);
num.sort();
console.log("Sorted array "+num);
let resultIndex = binarySearch(num,target);
if(resultIndex==-1){
    console.log("Element is not present in array")    
}else {
    console.log("Element present in array with index position "+num[resultIndex])
}
