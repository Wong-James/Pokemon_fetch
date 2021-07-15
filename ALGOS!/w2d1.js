/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<arrBer>} arrA
 * @param {Array<arrBer>} arrB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<arrBer>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

module.exports = { orderedIntersection };

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

function orderedIntersection(arrA, arrB) {
    let newArr = []

    for (var i = 0; i < arrA.length; i++){
        for(var j = 0; j < arrB.length; j++){
            if(arrA[i] === arrB[j] && newArr[newArr.length-1]!=arrB[j]){
                newArr.push(arrB[j])
            }
        }
    }return newArr
    // return a new array filled with only the intersecting values, no duplicates
    // CHALLENGE: COMPLETE ALGO WITHOUT THE HELP OF NEW DATA STRUCTURES
    // CHALLENGE: COMPLETE ALGO USING ONLY ONE LOOP AND NO BUILT-IN FUNCTIONS (PUSH ALLOWED)
}


console.log(orderedIntersection(numsA1,numsB1))
console.log(orderedIntersection(numsA2,numsB2))
console.log(orderedIntersection(numsA3,numsB3))
