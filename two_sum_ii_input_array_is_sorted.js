/**
 * 167. Two Sum II - Input Array Is Sorted (https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/) (Medium)
 * 
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
 * Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * Your solution must use only constant extra space.
 * 
 * Example 1:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 *  
 * Example 2:
 * Input: numbers = [2,3,4], target = 6
 * Output: [1,3]
 * Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
 * 
 * Example 3:
 * Input: numbers = [-1,0], target = -1
 * Output: [1,2]
 * Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 */


/**
 * Approach: Two Pointers (Optimized Approach)
 * 
 * Description:
 * This approach uses a two-pointer technique to solve the problem. 
 * The input array is sorted, allowing us to place one pointer (`left`) at the beginning of the array 
 * and another (`right`) at the end. We then calculate the sum of the two elements. 
 * If the sum matches the target, we return the indices. 
 * If the sum is greater than the target, we move the `right` pointer to decrease the sum. 
 * If the sum is smaller, we move the `left` pointer to increase the sum. 
 * This approach is efficient because it avoids a nested loop.
 * 
 * Time Complexity: O(n) - We traverse the array once by moving the pointers.
 * Space Complexity: O(1) - No extra space is used apart from the pointers.
 * 
 * @param {number[]} numbers - The sorted input array of numbers.
 * @param {number} target - The target sum we are trying to find.
 * @returns {number[]} - Returns an array containing the 1-based indices of the two numbers that sum to the target.
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (target == sum) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else if (sum < target) {
            left++
        }
    }

    return [];
};

const numbers = [2,7,11,15]; 
let target = 9;
console.log(twoSum(numbers, target));