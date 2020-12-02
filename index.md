数据结构与算法
### 算法
* 二叉树寻找和为n的路径
* 有一个无序数组，实现一个方法，把参数传进去，返回第k大的数 
* 二叉搜索树
* 二分排序 
* 快速排序
* 数组乱序(洗牌算法)
* 找出数组中最大的连续子数组和
* 把数字转换为中文，最高千亿。例100010->十万零一十
* 矩阵路径和最小的路径
* 全排列问题
* 最长公共前缀
* 多层数组嵌套降级
* 判断链表内是否存在环
* 实现链表尾部插入新节
* 动态规划玩股票
* 快速排序

* 数据结构
    * 数据结构的图和树的区别、链表和数组的区别
    * 广度优先算法和深度优先算法的区别和优缺点





### final round
| 序号 | 名称 | 题解 |
| --- | --- | --- |
| [leetcode 20] | [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/submissions/)  | [题解](/question/valid-parentheses/index.ts) |
| [leetcode 703] | [数据流中第K大元素](https://leetcode-cn.com/problems/valid-parentheses/submissions/)  | [简单排序](/question/valid-parentheses/index.ts) |

实现一个小顶堆

滑动窗口中的最大值(高频)

 
 ## 其他
 * 手写实现系列
  * 数组去重
  * 手写深拷贝
  * call/apply/bind/手写模拟
  * 原型/继承/ 与TS的继承相比较
  * Promise
  * 函数currying
  * 防抖与节流(可立即执行版本)
  * 实现async/await



### 面试

#### 算法
* 算法题：两个有序链表和并成一个有序链表
* 算法：树的遍历有几种方式，实现下层次遍历
* 算法：判断对称二叉树
* 算法题：合并乱序区间
* 算法题：两个有序链表和并成一个有序链表
* 算法：实现36进制转换
* 手撕笔试最后一条算法编程题(找零钱)
* 无重复最长子串
* leetcode 206题
* 类似 leetcode 673题 给一个字符串，找出最长递增子序列
* leetcode 94题
* leetcode 112题
* > // 实现一个可以批量 fetch 的函数，接收 urls 数组，max 最大并发量，cb 回调三个参数
    // 当所有请求结束之后，需要执行cb
    // 始终保持最大并发量执行，即一个 fetch 结束，另一个 fetch 立即补上，直到请求完所有的 url
* 实现一个求和方法，支持以下调用方式
* 用尾递归实现一个阶乘方法
* leetcode 15题 三数之和
* 描述一下大数相乘
* leetcode 70题

#### 手写
* 实现原生ajax
* call、aplly、bind 实现
* new 实现
* class 实现继承
* async/await 实现
* reduce 实现
* 实现一个双向数据绑定
* instanceof 实现
* Array.isArray 实现
* Object.create 的基本实现原理
* getOwnPropertyNames 实现
* promise 实现
* 手写一个防抖/节流函数
* 柯里化函数的实现
* 手写一个深拷贝
* 如何提升移动端用户的使用体验，让用户能更快的看到页面
* 给一个ul下面插入100个li应该怎么插入，如何优化dom操作
* UDP稳定性的优化处理
* instanceof原理
* 手写一个节流方法
* 手写一个promise.all方法 (如果传入的数组不是promise对象呢？)
  * 有一个有一百万个url的数组，如何从这一百万个url里获得资源
* 手写一个观察者模式 和 pubsub 模式
* 实现一个sleep函数
* 写出一个正则匹配出图片的后缀,匹配以.jpg或者.png结尾的链接
* 实现加法函数使得sum(2)(3)和sum(2,3)都输出5
* 用Promise实现post请求
* 用vue设计下拉框组件。可用<select :options="options" @change="handleChange">调用 
* 编写一个js的render渲染函数 
* 任务队列的设计(发布订阅模式的设计)
* 深度克隆
* 手写jsonp的实现原理




- 第一阶段
    - 前端常见手写模拟的都要过一遍
        - [https://zhuanlan.zhihu.com/p/196671665](https://zhuanlan.zhihu.com/p/196671665)  饥人谷，所有的手写项目
        - extent原理
        - 树形组件算法
        - JS限流调度器
        - 实现函数的currying，但是不是背通用公式，而是实例题目
    - 通用算法
        - 二叉树的各种遍历
        - top 30题
            - 数组中连续的元素最大和(滑动窗口)
            - 找出连续最大升序的数量
            - 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
        - 剑指offer 10题
        - 40 min 一题，需要理解

- 第二阶段
    - top 30 ~ 60
    - 剑指offer 10 ~ 20



### 参考文章
1. https://juejin.cn/post/6844904175562653710  前端算法RoadMap      
2. https://mp.weixin.qq.com/s/Qqh1H-2MUyVGoWjgOstQrg  手写模拟RoadMap       
