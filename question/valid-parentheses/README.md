### 问题描述
> Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

来源leetcode - EASY

### 用例
Example 1:
```
Input: "()"
Output: true
```

Example 2:
```
Input: "()[]{}"
Output: true
```

Example 3:
```
Input: "(]"
Output: false
```

Example 4:
```
Input: "([)]"
Output: false
```

Example 5:
```
Input: "{[]}"
Output: true
```

### 解题思路

1、首先看到必须要前后符号数目匹配

2、然后再者是，符号必须要复合前后闭合顺序

第一☝️时间想到的是类似于函数调用栈的模型。

### show me the code
```ts
/**
 *
 * /
function validParentheses (inputString: string) {

}

```