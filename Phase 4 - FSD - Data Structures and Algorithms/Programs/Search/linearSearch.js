
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return true;
        }
    }
    return false;
}

let num = [4,1,7,9,5,3,2,6];
let target = 10;
let result = linearSearch(num,target);
if(result){
    console.log("Element present in array")
}else {
    console.log("Element not present in array")
}
