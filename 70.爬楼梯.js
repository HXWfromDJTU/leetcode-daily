/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// ### 解题思路


// solve 1
var climbStairs = function (n) {
    
}

// solve 2
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // c 为从当前楼梯倒数两级楼梯，走到当前楼梯的走法数目
   let a = 0, b = 1 ,count = 0
   while(n--) {
       count = a + b
       a = b
       b = count
   }
   return count
};
// @lc code=end

