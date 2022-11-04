const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

function twoSum(nums, targetSum) {
    let myObj = {}

    for(let i=0;i<nums.length;i++){
        if((targetSum - nums[i]) in myObj){
            return [myObj[targetSum - nums[i]], i]
        } else {
            myObj[nums[i]] = i
        }
        
    }
}
console.log(twoSum(nums1, targetSum1))
console.log(twoSum(nums2, targetSum2))
console.log(twoSum(nums3, targetSum3))