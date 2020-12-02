/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (59.57%)
 * Likes:    607
 * Dislikes: 0
 * Total Accepted:    181.5K
 * Total Submissions: 287.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.

 */

class TreeNode {
         val: number
         left: TreeNode | null
         right: TreeNode | null
         constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.left = (left===undefined ? null : left)
             this.right = (right===undefined ? null : right)
         }
}

function levelOrder(root){
    // 边界条件
    if (!root) return []

    const result = []
    // 这里的数组，起到了栈的作用
    const queue = [root]

    while (queue.length) {
        // 当前层数组
        const curr_level = []

       for(let i =0; i < queue.length; i++) {
          // 当前节点左边出队
          const curr_node = queue.pop()
          // 存起该值
          curr_level.push(curr_node.val)
          
          // 处理子节点
          if (curr_node.left) queue.push(curr_node.left)
          if (curr_node.right) queue.push(curr_node.right)
       }

       // 存起当前层的数组
       result.push(curr_level)
    }
    return result
};
// @lc code=end

