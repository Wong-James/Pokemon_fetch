//1. Loop through an array
//2. start at the second position
//3. Compare that to the beggining of the array to make sure it's larger
//4. If it is continue through the array
//5. If not swap it to the correct position
var arr1 = [9, 5, 3, 2, 7, 4, 6, 8, 1]
var arr2 = [2, 3, 5, 7, 7, 7, 1, 8, 7]
var arr3 = [2, 1]

const insertionSort = arr => {
    if(arr.length < 2) return arr;
    for(let i = 1; i < arr.length; i++) {
        let j = i;
        while(j > 0 && (arr[j] < arr[j-1])){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }return arr;
}

console.log(insertionSort(arr1))
console.log(insertionSort(arr2))
console.log(insertionSort(arr3))