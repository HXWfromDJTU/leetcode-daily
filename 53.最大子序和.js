/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0 // 当前累加和
    var ret = nums[0] // 最终结果值
    nums.forEach((num, index) => {
       if (sum > 0) {
           // 前N项的累加和是正值，则值得累加
           sum += num
       } else {
           // 否则则舍弃前者，并且以当前值为起始重新开始累加
           sum = num
       }
       // 更新最大值到记录结果的变量
       ret = Math.max(ret, sum)
    })
    return ret
};
// @lc code=end

