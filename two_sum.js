/**
 * 1. Two Sum (https://leetcode.com/problems/two-sum/description/) (Easy)
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */


/**
 * Approach 1: Brute Force (Naive Approach)
 * 
 * Description:
 * This approach checks all pairs of elements in the array by using two nested loops.
 * For every element at index `i`, it checks if there exists another element at index `j` such that nums[i] + nums[j] equals the target.
 * 
 * Time Complexity: O(n^2) - Due to the two nested loops, we check all possible pairs in the array.
 * Space Complexity: O(1) - No extra data structures are used, only variables for indexing.
 * 
 * @param {number[]} nums - The input array of integers
 * @param {number} target - The target sum we are trying to find
 * @returns {number[]} - Returns an array containing the indices of the two numbers that sum to the target
 */
var twoSum = function(nums, target) {   
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }

    return [];
};

/**
 * Approach 2: Using Hashmap (Optimized Approach)
 * 
 * Description:
 * This approach leverages a hashmap (object) to store the complement (difference between the target and the current number).
 * As we iterate over the array, we check if the complement already exists in the hashmap.
 * If it does, that means we have found two numbers whose sum equals the target.
 * This approach reduces the time complexity by avoiding the need to check all pairs, as in the brute force approach.
 * 
 * Time Complexity: O(n) - We traverse the array once, and looking up elements in the hashmap takes constant time.
 * Space Complexity: O(n) - We use extra space to store the elements in the hashmap.
 * 
 * @param {number[]} nums - The input array of integers
 * @param {number} target - The target sum we are trying to find
 * @returns {number[]} - Returns an array containing the indices of the two numbers that sum to the target
 */
var twoSum = function(nums, target) {   
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]; 
        if (diff in hashMap) {
            return [hashMap[diff], i];
        }
        hashMap[nums[i]] = i;
    }

    return [];
};

// const nums = [2,7,11,15];
// let target = 9;
const nums = [3,2,4];
let target = 6;
console.log(twoSum(nums, target));