const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(arr){
    let limit = arr.length;

    for(var i = limit - 1; i > 0; i--){
        is_sorted=true;
        for(var j = 0; j < i ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                is_sorted=false;
            }
        }
    }return arr
}

console.log(bubbleSort(numsRandomOrder))
console.log(bubbleSort(numsReversed))



const func = (_=>()=>_++)(![])
console.log(func())
console.log(func())
console.log(func())
console.log(func())