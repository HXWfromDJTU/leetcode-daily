
// 使用递归的形式去做数的(前中后)遍历，也是属于使用 DFS
function DFS_template (root) {
    if (root === null) return // 终止条件

    return DFS_template(root.left).concat([root.val]).concat(DFS_template(root.right))
}


// 1. BAse Case
// 2. Do Something Or Recursive For sub-problems


/* Bottom Up
 * 1. Base Case
 * 2. 向子问题要答案
 * 3. 利用子问题的答案构建当前问题的答案
 * 4. 若有必要，做一些额外操作  
 * 5. 返回答案 
 */
