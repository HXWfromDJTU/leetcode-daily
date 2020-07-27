/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 反转链表的核心操作是，当亲
var reverseList = function(head) {
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
    // 直到最后 cur 指向为空
    return prev
};
// @lc code=end

