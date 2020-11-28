/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (56.75%)
 * Likes:    308
 * Dislikes: 0
 * Total Accepted:    182.6K
 * Total Submissions: 288.8K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    const charMap = new Map()

    // 统计 s 字符串的个数
    for (let i = 0; i < s.length; i++) {
        if (charMap.has(s[i])) {
            charMap.set(s[i], charMap.get(s[i]) + 1)
        }
        else {
            charMap.set(s[i], 1)
        }
    }
    // 检测字符是否在范围内
    for (let j = 0; j < t.length; j++) {
        // 字母不存在 或 当前记录数为0
        if (!charMap.has(t[j]) || charMap.get(t[j]) === 0) {
            return false
        } else {
            charMap.set(t[j], charMap.get(t[j]) - 1)
        }
    }

    // 检测字符是否被匹配完
    for (let charCount of charMap.values()) {
        if(charCount !== 0) {
            return false
        }
    }

    return true
};
// @lc code=end

isAnagram("anagram", "nagaram")

