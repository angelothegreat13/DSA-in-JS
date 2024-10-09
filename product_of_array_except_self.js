/**
 * 238. Product of Array Except Self (https://leetcode.com/problems/product-of-array-except-self/description/) (Medium)
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * 
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 */

var productExceptSelf = function(nums) {
    let result = new Array(nums.length).fill(1);

    // First pass: Calculate left product for each element
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Second pass: Calculate right product for each element and multiply with left product
    let rightProduct = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= rightProduct;
        rightProduct *= nums[j];
    }

    return result;
};

const nums = [1,2,3,4];
// const nums = [-1,1,0,-3,3];
console.log(productExceptSelf(nums));