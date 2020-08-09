// LCA (Lowest Common Ancestor)

/**
 * 解法 ① 
 * 最早路径重合方法
 * 条件：需要父亲指针
 * 
 */



 /**
 * 解法 ②
 * 使用递归法
 */

 function lowestCommonAncestor (root, p, q) {
     // 边界条件，三者任一者为null
     if (root === null || p === null || q === null) return null

     // p、q都不为空，并且有一个为根节点
     if (p === root || q === root) return root

     // 分别从左右子树中寻找结果
     // 节点位置并不重要，只需要知道有没有找到
     const left = lowestCommonAncestor(root.left, p, q)
     const right = lowestCommonAncestor(root.right, p, q)

     // 左右子树中都找到了，则说明公共节点就在root
     if (left && right) {
        return root
     }

    // 若一边子树没有任何一个节点，则说明两者都在另一边子树上
    if (left === null) {
        return right
    }
    if (right === null) {
        return left
    }
 }