//Optimized
var twoSum = function(nums, target) {
   let hashmap = {};
   for(let i=0; i<nums.length; i++){
       console.log((target - nums[i])==2);
       if(hashmap[target-nums[i]] !== undefined ){
        return [hashmap[target-nums[i]], i]
    }
   
        //console.log(hashmap[nums[i]] = i);
        hashmap[nums[i]] = i
        console.log(hashmap);
   }
   return []
};
console.log(twoSum([3,2,4], 6));
//[3,2,4]