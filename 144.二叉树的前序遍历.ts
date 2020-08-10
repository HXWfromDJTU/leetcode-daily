/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前中后序遍历
 */

// Definition for a binary tree node.
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

// ===============  递归写法 =============
// 前序遍历
function preorderTraversal(root: TreeNode | null): number[] {
    // 边界处理
    if (!root) return []

    // 根据前序遍历 (根 ---> 左 ---> 右)
    return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
};


// 中序遍历
function inorderTraversal(root: TreeNode | null): number[] {
    // 边界处理
    if (!root) return []

    // 根据中序遍历 (左 ---> 根 ---> 右)
    return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right))
};


// 后序遍历
function postTraversal(root: TreeNode | null): number[] {
    // 边界处理
    if (!root) return []

    // 根据后序遍历 (左 ---> 右 ---> 根)
    return inorderTraversal(root.left).concat(inorderTraversal(root.right)).concat([root.val])
};
// @lc code=end


//  ================= 非递归写法 =====================

