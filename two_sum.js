// brute force approach
// O(n^2) time complexity
var twoSum = function(nums, target) {   
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

// using hashmap
// O(n)
var twoSum = function(nums, target) {   
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]; 
        if (diff in hashMap) {
            return [hashMap[diff], i];
        }
        hashMap[nums[i]] = i;
    }
};

// const nums = [2,7,11,15];
// let target = 9;
const nums = [3,2,4];
let target = 6;
twoSum(nums, target);
// console.log(twoSum(nums, target));