/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 边界条件
    if (!head || !head.next) return false
    const startTime = new Date().getTime()
    const gap = 500
    let hasTail = false
    // 使用一个固定时间进行循环，让链表找自己的尾巴
    while(new Date().getTime() - startTime < 500) {
        if (!head.next) {
            hasTail = true
        } else {
          head.next = head.next.next
        }
    }
    // 返回能不能找到的结果
    return !hasTail
};

// 解法2 使用set来存储访问过的节点

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle2 = function(head) {
    // 边界条件处理
    if (!head || !head.next) return false

    const visitedSet = new Set()

    while (head.next) {
       // 若set中出现重复的节点，则说明有环
       if (visitedSet.has(head.next)) {
            return true
       } else {
        // 若没有
        // 存起来当前节点
        visitedSet.add(head.next)
        // 向后移动
        head.next = head.next.next
       }
    }
    return false
};


// 方法3 快慢指针法
const hasCycle3 = function(head) {
    // 边界条件处理
    if (!head || !head.next) return false

    let fast = head.next;
    let slow = head;

    // 保证 fast 与 slow 所指向都是有值的，并且要保证 fast.next.next 也要可以找到
    while (fast && fast.next && slow) {
        if (fast === slow) {
            return true
        } else {
            // 慢指针走一步，快指针走两步
            slow = slow.next
            fast = fast.next.next
        }
    }

    return false
};
