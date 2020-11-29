function levelOrder(root: TreeNode | null): number[][] {
    // 边界条件 (空节点)
    if (!root) return []

    // 声明保留结果的数组, 用于
    const resArr = []
    let currLevel = 0
    const nodeStack = [root]

    // 核心思想是使用双端队列，新增子节点push进去，当前要处理的节点shift出来

    // 双层循环，外层遍历层级，内层遍历同层节点
    while (nodeStack.length) {
        resArr[currLevel] = [] // 当前层级的容器

        let numsTobeHandleCurrLevel = nodeStack.length

        // 内层循环处理同层级节点
        while (numsTobeHandleCurrLevel--) {
            const currNode = nodeStack.shift() // 从头端取出节点
            resArr[currLevel].push(currNode.val) // 记录当前节点值

            // 存入下一层节点
            currNode.left && nodeStack.push(currNode.left)
            currNode.right && nodeStack.push(currNode.right)
        }

        // 本层处理完毕，移动到下一层级
        currLevel++
    }

    return resArr
};