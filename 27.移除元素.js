/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0 // 外循环指针
    let j = 0 // 内循环指针
    for(; i<nums.length; i++) {
        // 找到顺序的第一个
        if (nums[i] === val) {
           for(j= j>i ? j + 1 : i + 1; j<nums.length; j++) {
               // 找到第一个不等于目标值的数
               if (nums[j] !== val) {
                    // 后者覆盖前者
                    nums[i] = nums[j]
               }
           }
        }
    }
};
// @lc code=end

