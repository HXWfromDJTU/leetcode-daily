/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var indexInsert = 0 // 插入坐标
    var indexPos = 0 // 具体位置
    var ret = nums.find((num, i) => {
        // 始终往后一个插入
        if (num < target) {
            indexInsert = i + 1
        }
        indexPos = i
        return num === target
    })
    return ret === undefined ? indexInsert : indexPos
}
// @lc code=end

