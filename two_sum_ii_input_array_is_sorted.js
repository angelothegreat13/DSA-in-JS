// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// using hashmap
var twoSum = function(numbers, target) {
    let hashMap = {};

    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        if (diff in hashMap) {
            return [hashMap[diff], i + 1];
        }
        hashMap[numbers[i]] = i + 1; 
    }
};

// using two pointers approach (recommended)
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (target == sum) {
            return [left, right];
        } else if (sum > target) {
            right--;
        } else if (sum < target) {
            left++
        }
    }
    return [];
};

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
const numbers = [2,7,11,15]; 
let target = 9;

// twoSum(numbers, target);
console.log(twoSum(numbers, target));