/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (43.78%)
 * Total Accepted:    273.2K
 * Total Submissions: 605.3K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
        var len = nums.length;
        var numMap = {};
        // 将整个数组存放到map中，key为value，value为位置号
        for(var k=1;k<len;k++){
            numMap[nums[k]] = k;
        }
        // 在map中查找另一半
        for (var i = 0; i < len - 1; i++) {
            var gap = target - nums[i];
            if(numMap[gap]>=0 && numMap[gap]!==i){
                return [i,numMap[gap]];
            }
        }
};

