var simpleSort = function(nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[i]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    console.log(nums);
}

const nums = [3,1,2,4,6,11,-1];
simpleSort(nums);