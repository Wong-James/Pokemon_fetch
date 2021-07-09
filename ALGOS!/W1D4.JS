/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
// 1. Create an empty arr to push the sorted numbers into
// 2. Iterate through the left and right arrays and push the corresponding min values
// 3. Iterate through the array with numbers left and push the rest of the values
// 4. Return the new sorted array
var arr1 = [5, 15, 11, 3, 4, 6, 12, 10, 8]
var arr2 = [12, 16, 42, 100, 2, 7, 18, 13, 11, 5, 4]
var arr3 = [11, 15, 21, 153, 45, 80, 16 ,22, 13, 41, 75, 18, 100, 32, 65, 45, 25, 16, 26]


/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */


function merge(leftArr, rightArr) {
    let sortedNums = []
    while(leftArr.length > 0 && rightArr.length > 0){
        if(leftArr[0] < rightArr[0]){
            sortedNums.push(leftArr.shift())
        }else sortedNums.push(rightArr.shift())
    }return [...sortedNums, ...leftArr, ...rightArr]
}

function mergeSort(nums) {
    if(nums.length === 1){
        return nums
    }
    let mid = Math.floor(nums.length/2)
    let leftArr = nums.slice(0, mid)
    let rightArr = nums.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

console.log(mergeSort(arr1))
console.log(mergeSort(arr2))
console.log(mergeSort(arr3))