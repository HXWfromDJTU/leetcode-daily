/**
 * 只对左右括号进行检查处理，其他不管
 * 逻辑清晰 
 */

function isValidBracket (inputStr) {
    const closeBracks = [']', ')', '}']
    const bracketMap = {
        '[': ']',
        '(': ')',
        '{': '}'
    }

    const checkStack = []

    for(let i = 0; i < inputStr.length; i++) {
        const curr = inputStr[i]

        // 若是左括号
        if (bracketMap[curr]) {
            checkStack.push(curr)
        }

        // 若是右括号
        if (closeBracks.includes(curr)) {
            const topElm = checkStack.pop()

            // 若符号不匹配
            if (curr !== bracketMap[topElm]) {
                return false
            }
        }
    }

    return checkStack.length === 0 
}