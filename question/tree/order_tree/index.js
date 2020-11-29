// 使用递归方法，进行树的遍历 
function inorderTraversal(root) {
    if (!root) return []

    return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right))
}

function inorderTraversal(root) {
    const treeStack = []
    const numArr = []
    let curr = root

    // 当前节点不为空 或者 仍有压栈的节点
    while (curr !== null || treeStack.length > 0) {
        if (curr) {
            treeStack.push(curr)
            // 一直向左移动，直到找到最左边的节点的左节点
            curr = curr.left
        } else {
            curr = treeStack.pop()  // 当没有左节点时，回溯到中间节点
            numArr.push(node.val) // 保存节点值
            node = ndoe.right   // 以右边节点为root继续循环
        }
    }

    return numArr
}



function preorderTraversal(root) {
    if (!root) return []

    return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
}

function preorderTraversal(root) {
    const treeStack = root ? [root] : []
    const resArr = []

    while (treeStack.length !== 0) {
        const curr = treeStack.pop()

        resArr.push(curr.val) // 存起中间节点值

        // 左右节点压入栈中
        curr.right && treeStack.push(curr.right)
        curr.left && treeStack.push(curr.left)
    }
    return resArr
}


function postorderTraversal(root) {
    if (!root) return []

    return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat([root.val])
}

function postorderTraversal(root) {
    const treeStack = []
    const resArr = []

    while (root || treeStack.length > 0) {
        if (root.left) {
            treeStack.push(root)
            root = root.left
        } else if (root.right) {
            treeStack.push(root)
            root = root.right
        } else {
            resArr.push(root.val)
            root = treeStack.pop()

            // 避免重复查找
            if (root && root.left) {
                root.left = null
            } else if (root && root.right) {
                root.right = null
            }
        }
    }

    return resArr
}