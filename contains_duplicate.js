/**
 * 217. Contains Duplicate (https://leetcode.com/problems/contains-duplicate/description/) (Easy)
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Explanation:
 * The element 1 occurs at the indices 0 and 3.
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * Explanation:
 * All elements are distinct.
 * 
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */


/**
 * Approach 1: Brute Force
 * 
 * Description:
 * The brute force approach uses a nested loop to compare every pair of elements. 
 * If a duplicate is found, the function returns `true`.
 * 
 * Time Complexity: O(n^2) - Since we have to compare each element with every other element.
 * Space Complexity: O(1) - We are not using extra space except for a few variables.
 * 
 * @param {number[]} nums - The input array of numbers
 * @returns {boolean} - Returns true if duplicates exist, false otherwise
 */
var containsDuplicate = function(nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }

    return false;
};


/**
 * Approach 2: Using Hashmap (Optimized Approach)
 * 
 * Description:
 * This approach leverages a hashmap (object) to store seen elements as we iterate over the array.
 * If we encounter an element that already exists in the hashmap, we return `true`.
 * This reduces the time complexity to O(n).
 * 
 * Time Complexity: O(n) - We traverse the array once and look up elements in a hashmap.
 * Space Complexity: O(n) - We use extra space for the hashmap to store seen elements.
 * 
 * @param {nums[]} nums - The input array of numbers
 * @returns {boolean} - Returns true if duplicates exist, false otherwise
 */
var containsDuplicate = function(nums) {
    let numsMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in numsMap) {
            return true;
        } else {
            numsMap[nums[i]] = 1;
        }
    }

    return false;
};

const nums = [1,2,3,1];
// const nums = [1,2,3,4];
// const nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));