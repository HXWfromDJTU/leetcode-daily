/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
var reverseLi = function(head) {
    // 当前指针和前驱指针，分别指向头结点和null
    let [cur, prev] = [head, null]
    while (cur) {
        // 以下的赋值语句可以拆分为两步
        /**
         * ① cur.next = prev 使得当前节点的指向前驱结点，实现了反转的目的
         * ② cur 和 pre 两个节点向后移动一个位置
         */
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    // 直到最后 cur 指向为空，当前的pre自然就是第一个节点
    return prev
};


// 使用 递归的形式
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
var reverseList2 = function(head) {
    if (head === null) return null // 原本就是个空链表，那么就返回一个空链表
    if (head.next === null) return head // head.next === null 说明链表只有一个节点

    // 使用问题规模缩小的思维，假设除了头结点外，剩余节点已经反转完了(这里就用反转函数来处理)
    const newHead = reverseList2(head.next)  // 处理完的节点有一个新的头结点 newHead

    // 处理当前头结点 与 已完成反转的链表之间的关系
    // 当前情况下是  head --> (A) -->  (B) <--- (C)  <-- (D) <-- (E) <-- (F) <-- newHead
    head.next.next = head // head.next.next 表示将 (B) 的 next 指向 (A)
    head.next = null // 然后将 (A) 的 next 指向 null
    // 结果就是 null <--- (A) <--- (B) <--- (C)  <-- (D) <-- (E) <-- (F) <-- newHead
    //  head ↗

    // 顺利反转后，返回 newHead
    return newHead
};

