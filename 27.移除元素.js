/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement (arr, val) {
    const len = arr.length
	let i = 0 // 慢指针下标
    let j = 0 // 快指针下标
    let count = 0 // 统计出现了几次目标元素
    // 比较愚蠢的办法
    arr.forEach(item => {if (item === val) {
       count ++
     } })
    // 寻找目标元素
    for (; i < len; i++) {
      // 寻找到目标元素
	  if (arr[i] === val) {
        // 快指针从慢指针的下一位置开始
		for (j = i + 1 ; j < len; j++) {
           // 找到一个不等于目标值的元素
           if (arr[j] !== val) {
			// 快慢指针位置元素，进行置换
            [arr[i],arr[j]] = [arr[j],arr[i]]
          }
        }
      }
   }
  arr.length = len - count
  return arr
}
// @lc code=end