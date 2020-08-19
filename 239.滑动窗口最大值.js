/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode-cn.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (42.73%)
 * Likes:    505
 * Dislikes: 0
 * Total Accepted:    68.3K
 * Total Submissions: 140.2K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 * 
 * 返回滑动窗口中的最大值。
 * 
 * 
 * 
 * 进阶：
 * 
 * 你能在线性时间复杂度内解决此题吗？
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7] 
 * 解释: 
 * 
 * ⁠ 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 * 
 * 
 */

/**
 * 双端队列解法
 * 
 */
function maxSlidingWindow(nums, k) {
    const resArr = []
    const slideWinIndexs = []

    for (let i = 0; i < nums.length; i ++) {
       // 窗口满了，再移动窗口，则删除队头元素
       if (i - slideWinIndexs[0] >= k) slideWinIndexs.shift()

       while (nums[slideWinIndexs[slideWinIndexs.length - 1]] <= nums[i]) {
           // 小于当前值的元素，逐个移除出窗口
           slideWinIndexs.pop()
       }

       // 将当前元素加入窗口
       slideWinIndexs.push(i)

       if (i >= k-1) {
        // 滑动窗口最左边的值始终为最大值
        resArr.push(nums[slideWinIndexs[0]])
       }
    }

    return resArr
};
// @lc code=end

