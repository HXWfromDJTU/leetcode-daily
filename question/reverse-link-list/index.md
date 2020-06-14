# Array & Linked List

### 反转链表

[206] Reverse Linked List   

原题[连接](https://leetcode-cn.com/problems/reverse-linked-list/)    

##### 解题关键
* 初始化当前节点 cur 与其前驱 prev
* 使用循环驱动整个流程
* 当前节点的`next`指向前驱结点
* cur 与 prev 向后移动

```js
const reverseList = function(head) {
    // ① 声明当前节点 cur 与其前驱结点 prev
    let [cur, prev] = [head, null]
    // 循环驱动
    while (cur) {
        // 此处为简写,可拆皆为两步
        // cur.next = prev 是链反转
        // prev = cur 与 cur = cur.next 共同的作用是向后移动
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev
};
```
          
### 反转相邻节点

[24] Swap Nodes In Pairs

原题[连接](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)


