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

// 使用Map结构
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
function majorityElement (nums: number[]): number {
    const recorder = {}
    nums.forEach(nums => {
        if (recorder[nums]) {
            recorder[nums] += 1
        } else {
            recorder[nums] = 1
        }
    })
    let maxTimes = 0
    let majorityNum = 0

    Object.keys(recorder).forEach((number) => {
        if (recorder[number] > maxTimes) {
            maxTimes = recorder[number]
            majorityNum = Number(number)
        }
    })

    return majorityNum
};

// 
/**
 * 使用排序，得出的结果众数题目规定是超过 1/2 ，所以中位数肯定就为众数
 * 时间复杂度 O(n * logN)
 * 空间复杂度 O(1)
 */
function majorityElement2 (nums: number[]): number {
    nums.sort()
    return nums[Math.floor(nums.length / 2)]
};// @lc code=end

