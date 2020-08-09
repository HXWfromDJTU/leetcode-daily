/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
    // 处理边界条件
    if (!root) return []
    // 使用递归思维
    // 中序遍历  左 + 中 + 右
    return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right))
};
// @lc code=end



function inorderTraversal2(root: TreeNode | null): number[] {
    // 处理边界条件
    if (!root) return []
    
    while(root) {
        
    }
};