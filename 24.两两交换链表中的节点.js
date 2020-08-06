/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  // 上来先处理边界条件
   if (head === null || head.next === null) return head;

  let prev = new ListNode(null);
  prev.next = head;

  while(prev.next && prev.next.next) {
     // 设定好三个位置
     let [curr, next] = [prev.next, prev.next.next];

     // 开始交换
     // 开始情况：  pre --> A --> B --> C --> D --> E
     // 结果情况：  pre --> B --> A --> C --> D --> E
     // 对比可知发生了 3 个节点的 next 变化
     // prev --> B (链表头指向变化)
     // A --> C (接上原来的尾巴)
     // B --> A (掉头)
     [prev.next, curr.next, next.next] = [next, next.next, curr];

     // 向后移动两个节点
     prev = prev.next.next;
  }
  return prev.next;
};

// 递归解开法

var swapPairs = function(head) {
  // 上来先处理边界条件
  if (head === null || head.next === null) return head;
  // 设定好当前、下一个节点
  let [curr, next] = [head, head.next];
  // 接尾  与 反向
    // 接尾时候，假设以 next.next 为首的后续链表已经交换完毕
    // 反向 则是简单的 next.next 指向前驱节点
  [curr.next, next.next] = [swapPairs(next.next), curr];

  return next;
};

