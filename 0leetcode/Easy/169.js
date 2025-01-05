// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

//1
var majorityElement = function(nums) {
    n = Math.ceil(nums/2)
    let maxValue = nums[0]
    let dict = {}

    for(let i = 0; i< nums.length; i++){
     if(nums[i] in dict){
         dict[nums[i]] +=1
         if(dict[nums[i]] > n){
            maxValue = nums[i]
         }
     }
     else{
         dict[nums[i]] = 1
     }
    } 
    return maxValue
};

//2
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    
    for(let num of nums){
        if(count === 0){
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
};