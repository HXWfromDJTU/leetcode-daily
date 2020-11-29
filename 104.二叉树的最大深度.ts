/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (71.30%)
 * Likes:    748
 * Dislikes: 0
 * Total Accepted:    310.4K
 * Total Submissions: 411.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function isLeafNode (node: TreeNode) {
    return node.left === null && node.right === null
 }

function maxDepth(root: TreeNode | null): number {
    // 边界值判断
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};


function minDepth(root) {
    if (!root) return 0;

    // 单边子树不存在，则深度就为另一边子树的最小深度 + 1
    if (!root.left) return 1 + minDepth(root.right)
    if (!root.right) return 1 + maxDepth(root.left)

    // 若左右子树都存在，则计算两边子树的最小深度都算出来
    const leftMinDepth = minDepth(root.left)
    const rightMinDepth = maxDepth(root.right)

    // 再取最小值
    return 1 + Math.min(leftMinDepth, rightMinDepth)
}
// @lc code=end

