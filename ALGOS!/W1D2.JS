const numsRandomOrder = [-Number.MAX_VALUE, 9, 2, 5, 13, 6, 4, 12, 3, 7, 10, 1, 8, 11, 11, 25, 15, -5];
/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums) {
    var idx;
    for (var i = nums.length - 1; i >= 0; i--) {
        let max = nums[0];
        for (var j = 0; j <= i; j++) {
            if (nums[j] > max) {
                max = nums[j];
                idx = j;
            }
        }
        var temp = nums[i];
        nums[i] = max;
        nums[idx] = temp;
    }
    return nums;
}
console.log(selectionSort(numsRandomOrder))