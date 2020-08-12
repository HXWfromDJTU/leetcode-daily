/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (60.56%)
 * Likes:    693
 * Dislikes: 0
 * Total Accepted:    198.9K
 * Total Submissions: 309.7K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const recorder = {}
    nums.forEach(nums => {
        if (recorder[nums]) {
            recorder[nums] += 1
        } else {
            recorder[nums] = 1
        }
    })
    let maxTimes = 0
    Object.keys(recorder).forEach(times => {
        if (Number(times) > maxTimes) {
            maxTimes = Number(times)
        }
    })
};
// @lc code=end

