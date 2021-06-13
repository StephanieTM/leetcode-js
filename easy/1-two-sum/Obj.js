/** result 88ms 39.5MB */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i +=1) {
    const diff = target - nums[i];
    const idx = map[diff];
    if (idx !== undefined) {
      return [idx, i];
    }
    map[nums[i]] = i;
  }
  return [];
};

