/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

//  // 使用中序遍历，判断遍历结果是否一个顺序结果
//  //  * 时间复杂度 O(N)
// function isValidBST(root: TreeNode | null): boolean {
//     const resinorderArr = inorderTraversal(root)

//     // 遍历中序遍历的结果
//     for (let index =1; index < resinorderArr.length; index++) {
//         // 发现当前值小于前值，则说明不是平衡树
//         /* 注意 
//          * 这里需要一下 节点相等的情况也不可以理解为二叉搜索树
//          */
//         if (resinorderArr[index] <= resinorderArr[index - 1]) {
//             return false
//         }
//     }

//     return true
// };

// 使用递归进行判断
/**
  ① 深度优先搜索，每层有最小值和最大值
        递归左节点用当前节点更新最大值
        递归右节点用当前节点更新最小值
  ② 非空节点且节点值<最小值或节点值>最大值，返回false
 * 
 * 时间复杂度 O(N)
 */ 

function isValidBST(root: TreeNode | null, min: number, max: number): boolean {
    // 空树
    if (!root) return true
    console.log(root.val, min, max)

    // 检查当前层 ===> 分别需要确保 被检查节点不小于min,也不大于max
    // 检查右节点
    if (min !== null && root.val <= min) return false
    // 检查左节点
    if (max !== null && root.val >= max) return false

    // 使用递归解决判断左右子树的情况
    /**
     * 左子树
     * 检查左子树的时候，特点是所有的左子树节点都是小于当前根节点的
     * current 值就是左子树的 max 值
     * 
     * 右子树
     * 检查右子树的时候，特点是右边子树的节点都要比current.val大
     * current 值就是右子树 min 值
     */
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};
