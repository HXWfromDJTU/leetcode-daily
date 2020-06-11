/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 最左侧值为定值，右侧所有值进行两边推进计算
    let res = [];
    nums.sort((a, b) => a - b);
    let size = nums.length;
    if (nums[0] <= 0 && nums[size - 1] >= 0) {
      // 保证有正数负数
      let i = 0;
      while (i < size - 2) {
        if (nums[i] > 0) break;
        let first = i + 1;
        let last = size - 1;
        while (first < last) {
          // 三数同符号
          if (nums[i] * nums[last] > 0) break;
          let sum = nums[i] + nums[first] + nums[last];
          if (sum === 0) {
            res.push([nums[i], nums[first], nums[last]]);
          }
          if (sum <= 0) {
            // 负数过小，first右移
            while (nums[first] === nums[++first]) {}
          } else {
            while (nums[last] === nums[--last]) {}
          }
        }
        while (nums[i] === nums[++i]) {}
      }
    }
    return res;
};
// @lc code=end

