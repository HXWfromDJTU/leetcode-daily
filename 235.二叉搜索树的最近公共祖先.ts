/**
 * 与236题要求相同，寻找树种两个节点的公共祖先
 * 不同点是本次的树，是二叉搜索树
 * 特点是左子树节点永远小于当前节点，右子树节点永远大与当前节点
 */


/**
 * 利用此特性，先用递归解决
 */
function lowesetCommonAncestor(root, p ,q) {
    // 二者都在左子树中，则继续在左子树中寻找
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }

    // 二者都在右子树中，则继续在右子树中寻找
    if (root.val < p.val && root.val > root.val) {
        return lowestCommonAncestor(root.right, p ,q)
    }

    // 若一个在一边，则说明当前root节点就是共同祖先节点
    return root
}


/**
 * 对应上面的思路，不使用递归，我们也可以解开
 */

 function lowestCommonAncestor2 (root, p, q) {
     while (root) {
         if (root.val > p.val && root.val > q.val) {
            root = root.left
         }
         else if (root.val < p.val && root.val < q.val) {
             root = root.right
         }
         else {
             return root
         }
     }
 }