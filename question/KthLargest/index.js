/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第K大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/description/
 *
 * algorithms
 * Easy (40.88%)
 * Likes:    139
 * Dislikes: 0
 * Total Accepted:    24.5K
 * Total Submissions: 54.7K
 * Testcase Example:  '["KthLargest","add","add","add","add","add"]\n' +
  '[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]'
 *
 * 设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。
 * 
 * 你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用
 * KthLargest.add，返回当前数据流中第K大的元素。
 * 
 * 示例:
 * 
 * 
 * int k = 3;
 * int[] arr = [4,5,8,2];
 * KthLargest kthLargest = new KthLargest(3, arr);
 * kthLargest.add(3);   // returns 4
 * kthLargest.add(5);   // returns 5
 * kthLargest.add(10);  // returns 5
 * kthLargest.add(9);   // returns 8
 * kthLargest.add(4);   // returns 8
 * 
 * 
 * 说明: 
 * 你可以假设 nums 的长度≥ k-1 且k ≥ 1。
 * 
 */

// @lc code=start
class KthLargest {
    constructor(k, nums) {
        // 前k大元素的容器
        this.kArr = nums.sort((a, b) => b - a)
        this.k = k
    }

    add(val) {
        // 初始插入位置为末尾
        let insertpPos = this.kArr.length

        // 遍历找到按照大小排序中，应该插入的位置
        // 此处的寻找插入位置，也代替了数组重新排序的必要
        for (let i = 0; i < insertpPos; i++) {
            if (val >= this.kArr[i]) {
                insertpPos = i
                break
            }
        }
        
        // 将新增加元素插入对应位置
        this.kArr.splice(insertpPos, 0, val)

        // 返回第K大元素
        return this.kArr[this.k - 1]
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

