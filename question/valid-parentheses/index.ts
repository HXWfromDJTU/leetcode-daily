/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    const symbolMap = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    // 用于模拟堆栈的数组
    const stack = []
    
    for(let i = 0; i < s.length; i ++) {
        // 若是左括号
        if(symbolMap[s[i]]) {
            // 把该元素加入到栈顶
            stack.unshift(s[i])
        }
        // 若是右括号
        else {
            // 判断当前栈顶元素 和 当前右括号是否匹配
            if (symbolMap[stack[0]] !== s[i]) {
                // 不匹配则判定为，括号不匹配
                return false
            } else {
                // 若匹配则移除栈顶元素
                stack.shift()
            }
        }
    }
    // 最后判断栈中是否还有
    return stack.length === 0
};
// @lc code=end

