/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (33.38%)
 * Likes:    466
 * Dislikes: 0
 * Total Accepted:    115.6K
 * Total Submissions: 318.5K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * 
 * 示例 1:
 * 
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 
 * 
 * 示例 2:
 * 
 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 
 * 
 * 示例 3:
 * 
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 说明:
 * 
 * 
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。
 * 
 * 
 */

// @lc code=start
function myPow(x: number, n: number): number {
    if (n === 0) return 1
    if (n === 1) return x

    // 倒数
    if (n < 0) {
        return 1 / myPow(x, -n)
    }

    // 奇数
    if (n % 2 === 1) {
        // 此处写作 n - 1,便于将下一层循环改为偶数
        return x * myPow(x, n - 1) 
    }

    // 偶数
    if (n % 2 === 0) {
        // 此处为何不可写为 myPow(x, n/2) * myPow(x, n/2) ？
        return myPow(x * x, n/2)
    }

};
// @lc code=end

