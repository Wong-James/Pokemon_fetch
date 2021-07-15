/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

function allNonConsecutive(arr) {
    let value = {}
    let emptyArr = []
    for(var i = 1; i < arr.length; i++){
        if(arr[i] - 1 !== arr[i-1]){
            value["i"] = i
            value["n"] = arr[i]
            emptyArr.push(value)
            value = {}
        }
    }return emptyArr
}

console.log(allNonConsecutive(nums1))


const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 */
 const nums1 = [2, 5, 3, 6, 7, 23, 12];
 const sum1 = 16;
 const expected1 = [
   [2, 5, 3, 6],
   [3, 6, 7],
 ];

const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

function findConsqSums(nums, targetSum) {
    let result = []
    for(var j = 0; j < nums.length; j++){
        let sumArr = []
        let summedNums = 0
        for(var i = j; i < nums.length; i++){
            summedNums += nums[i]
            sumArr.push(nums[i])
            if(summedNums === targetSum){
                newArr = []
                newArr.push(sumArr)
                result.push(newArr)
                
            }
        }
    }return result
}

// console.log(findConsqSums(nums1, sum1))
console.log(findConsqSums(nums2, sum2))