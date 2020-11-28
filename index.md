
数据结构与算法
* 算法
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

* 数据结构
    * 数据结构的图和树的区别、链表和数组的区别
    * 广度优先算法和深度优先算法的区别和优缺点


手写类
* instanceof原理
    `insatnceof`的原理是根据原型链向上查找，有一个局限性就是第二个参数必须是对象或者构造函数。     
    [instanceof的模拟实现](/algorithm/instanceof.js)
    ```js
     //  与 typeof 基本相反，不能够有效地检测字面量的类型
    "stringTest"  instanceof  String  //false
    (new String('testString')) instanceof String  // true
    ```
优点：能够检测 使用构造函数生成的变量对象   也能够区分出 `Array` `Object`  `Fucntion`
缺点： 不能够检测出对象字面量形式的`基础类型`数据，比如`123-Number` `abc-String`  `true-Boolean`  
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

优化
* 如何提升移动端用户的使用体验，让用户能更快的看到页面
* 给一个ul下面插入100个li应该怎么插入，如何优化dom操作
* UDP稳定性的优化处理





### final round
| 序号 | 名称 | 题解 |
| --- | --- | --- |
| [leetcode 20] | [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/submissions/)  | [题解](/question/valid-parentheses/index.ts) |
| [leetcode 703] | [数据流中第K大元素](https://leetcode-cn.com/problems/valid-parentheses/submissions/)  | [简单排序](/question/valid-parentheses/index.ts) |

实现一个小顶堆

滑动窗口中的最大值(高频)

 