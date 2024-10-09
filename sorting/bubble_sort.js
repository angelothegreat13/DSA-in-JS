var bubbleSort = function(nums) {
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j+1]) {
                let temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }

    return nums;
};

const nums = [3,1,6,-2,2,5,0];
console.log(bubbleSort(nums));